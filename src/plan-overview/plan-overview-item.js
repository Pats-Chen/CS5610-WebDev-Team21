import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {getUserProfile} from "../services/user-service";
import {useSelector} from "react-redux";
import {delTravelPlan} from "../services/travel-plan-service";
import './plan-overview.css';


const PlanOverviewItem = (
    {
        planOverview = {
            "_id": 1,
            "planName": "Plan 1",
            "planCreator": "11",
            "planOwner": "11",
            "planOverview": "11",
            "planDescription": "This is a example of a plan.",
            "locations": [ {
                "placeId": "Stop 1",
                "location": [42.3456, -71.0987],
                "stopTime": "11"
            }]
        }
    }
) => {
    const {currentUser} = useSelector((state) => state.users);
    const [planOwner,setPlanOwner] = useState(null);
    const [placeId, setPlaceId] = useState(null);
    const [placeDetails, setPlaceDetails] = useState(null);

    const deletePlanClickHandler = (locations_id) => {
        if (currentUser.userStatus === "admin" || currentUser._id === planOverview.planOwner) {
            delTravelPlan(locations_id);
            window.location.reload();
        } else {
            console.log("User is not authorized to delete this plan!");
        }
    }

    useEffect(() => {
        const fetchPlaceURL = async () => {
            const map = await new window.google.maps.Map(document.createElement('div'));
            const service = await new window.google.maps.places.PlacesService(map);
            // console.log(placeId);
            if (placeId) {
                const request = {placeId: placeId, fields: ['photos'],}
                service.getDetails(request, (place, status) => {
                    if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                        setPlaceDetails(place);
                    }
                });
            };
        };
        getUserProfile(planOverview.planCreator).then((result)=>setPlanOwner(result))
        if (placeId === null) setPlaceId(planOverview.locations[0].placeId);

        fetchPlaceURL();
    }, [placeId]);

    if (!placeDetails) {
        return <div>Loading...</div>;
    }
    const photoUrl =
        placeDetails.photos && placeDetails.photos.length > 0
            ? placeDetails.photos[0].getUrl()
            : null;
    return (
        <>
            <div className="col-md-4">
                <div className="card mb-4 box-shadow">
                    <img className="card-img-top"
                         src={photoUrl ? `${photoUrl}` : `${process.env.PUBLIC_URL}/img/no-photo.svg`}
                         alt={photoUrl ? `${photoUrl}` : `${process.env.PUBLIC_URL}/img/no-photo.svg`}
                         style={{height: "225px", width: "100%", display: "block", position: "relative"}}/>
                    <div className="card-body">
                        <div className="justify-content-between align-items-center">
                            <div className="row text-end">
                                {currentUser && (currentUser._id === planOverview.planOwner || currentUser.userStatus === "admin") &&
                                    <div>
                                        <i className="fa fa-times fa-1x iconHoverEffect rounded-2 p-1"
                                           style={{color: "dimgray", zIndex: "2", position: "relative"}}
                                           onClick={() => deletePlanClickHandler(planOverview._id)}/>
                                    </div>
                                }
                            </div>

                            <div className="row">
                                <div className="col-sm-1">
                                    <i className="fa fa-suitcase fa-1x" style={{color: "seagreen"}}></i>
                                </div>
                                <div className="col-sm-11">
                                    <span className="text-muted">{`${planOverview.planName}`}</span>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-1">
                                    <i className="text-center fa fa-user fa-1x" style={{color: "seagreen"}}></i>
                                </div>
                                <div className="col-sm-11">
                                    <span className="text-muted">{planOwner && `${planOwner.username}`}</span>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-sm-1">
                                    <i className="text-center fa fa-map-marker fa-1x" style={{color: "seagreen"}}></i>
                                </div>
                                <div className="col-sm-11">
                                    <span className="text-muted">{`${planOverview.locations.length}`}</span>
                                </div>
                            </div>

                            <div className="row">
                                <p className="card-text">{`${planOverview.planDescription}`}</p>
                            </div>

                            {/*this stretched link will only be spread over the img tag because of the transform*/}
                            <Link to= {`/travelAdvisor/detail/${planOverview._id}`} className="stretched-link"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PlanOverviewItem;