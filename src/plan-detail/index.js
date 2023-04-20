import React, {useEffect, useState} from "react";
import ItineraryList from "./itinerary-list";
import ItineraryMap from "./itinerary-map";
import {useLoadScript} from "@react-google-maps/api";
import './index.css';
import {getUserProfile} from "../services/user-service";
import MyReviews from "../review/index.js"
import {Link, useParams} from "react-router-dom";
import {getPlanById} from "../services/travel-plan-service";


const PlanDetailComponent = () => {
    const { isLoaded } = useLoadScript({
                                           googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY});
    const{planId} = useParams();


    // hardcode demoID：
    const [planOwnerId,setPlanOwnerId] = useState(null);
    const [displayPlan,setDisplayPlan] = useState(null);
    const [planOwner, setPlanOwner]= useState(null);
    useEffect(() => {
        async function fetchData() {
            const displayPlanHolder = await getPlanById(planId);
            const userProfile = await getUserProfile(displayPlanHolder.data.planOwner);
            setPlanOwnerId(displayPlanHolder.data.planOwner)
            setPlanOwner(userProfile);
            setDisplayPlan(displayPlanHolder.data)
            // console.log(displayPlan);
            // console.log(displayPlanHolder);
        }
        fetchData();
    }, [planId]);
    // useEffect(() => {
    //     setDisplayPlan(displayPlan);
    // }, [displayPlan]);

    if (!isLoaded) return <div>Loading...</div>
    return displayPlan && (
        <>
            <h2>{displayPlan.planCreator}</h2>
            <div className="container row bg-light rounded-top-2 ps-5 m-0">
                <div className="col-2 bg-light"></div>
                <div className="col-8 bg-light">
                    <ItineraryMap plan = {displayPlan}></ItineraryMap>
                </div>
                <div className="col-2 bg-light"></div>
            </div>
            {/*Placeholder for navigation to Owner's profile*/}
            <div className="container row bg-light rounded-top-2 ps-5 m-0">
                <div className="col-2 bg-light"></div>
                <div className="col-8 bg-light">
                    {/*must use planOwner &&*/}
                    {planOwner && ( <>
                        <label className="form-label" htmlFor=""><h4>Plan Owner: {planOwner.username}</h4></label>
                        <Link to={`/travelAdvisor/profile/${planOwnerId}`}
                              className="text-decoration-none">
                            <h4>View Profile</h4>
                        </Link></>)}
                </div>
                <div className="col-2 bg-light"></div>
            </div>
            {/*Placeholder ends here*/}
            <div className="container bg-light pb-2 rounded-bottom-2">
                <ItineraryList plan = {displayPlan}></ItineraryList>
            </div>

            <div>
                <footer>
                    <p className="float-end text-muted"><a href="#">Back to top</a></p>
                    <p className="text-muted">&copy; Team 21 &middot; CS5610 &middot; Northeastern University &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
                </footer>
            </div>


        </>
    )
};

export default PlanDetailComponent;
