import React, {useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";
import {getUserProfile} from "../services/user-service";

const PlanOverviewItem = (
    {
        planOverview = {
            "_id": 1,
            "planName": "Plan 1",
            "planCreator": "11",
            "planOverview": "11",
            "planDescription": "This is a example of a plan.",
            "locations": [ {
                "placeId": "Stop 1",
                "location": [42.3456, -71.0987],
                "stopTime": "11"
            }],
            "planCover": "fenway-park.jpg"
        }
    }
) => {
    const [planOwner,setPlanOwner] = useState(null);
    const [placeId, setPlaceId] = useState(null);
    const [placeDetails, setPlaceDetails] = useState(null);

    useEffect(()=>{
        getUserProfile(planOverview.planCreator).then((result)=>setPlanOwner(result))
        setPlaceId(planOverview.locations[0].placeId);
        // console.log(planOverview.locations[0].placeId)
    },[])

    useEffect(() => {
        const fetchPlaceURL = async () => {
            const map = new window.google.maps.Map(document.createElement('div'));
            const service = new window.google.maps.places.PlacesService(map);
            const request = {placeId: placeId, fields: ['photos'],};

            service.getDetails(request, (place, status) => {
                if (status === window.google.maps.places.PlacesServiceStatus.OK) {
                    setPlaceDetails(place);
                }
            });
        };
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
                         // src={`${process.env.PUBLIC_URL}/img/${planOverview.planCover}`}
                        src={photoUrl}
                         alt={`${planOverview.planCover}`}
                         style={{height: "225px", width: "100%", display: "block"}}/>
                        <div className="card-body">
                            <div className="justify-content-between align-items-center">

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
                            </div>

                            <p className="card-text">{`${planOverview.planDescription}`}</p>
                        </div>
                    <Link to= {`/travelAdvisor/detail/${planOverview._id}`} className="stretched-link"/>
                </div>
            </div>
        </>
    );
}

export default PlanOverviewItem;