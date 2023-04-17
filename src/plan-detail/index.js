import React, {useEffect, useState} from "react";
import ItineraryList from "./itinerary-list";
import ItineraryMap from "./itinerary-map";
import {useLoadScript} from "@react-google-maps/api";
import './index.css';
import {getUserProfile} from "../services/user-service";
import {Link} from "react-router-dom";

const PlanDetailComponent = () => {
    const { isLoaded } = useLoadScript({
                                           googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY});
    // hardcode demoID：
    const planOwnerId ="643c5e65a928059058979dc4";
    const [planOwner, setPlanOwner]= useState(null);

    useEffect(() => {
        async function fetchData() {
                const userProfile = await getUserProfile(planOwnerId);
                setPlanOwner(userProfile);
        }
        fetchData();
    }, []);
    if (!isLoaded) return <div>Loading...</div>

    return (
        <>
            <div className="container row bg-light rounded-top-2 ps-5 m-0">
                <div className="col-2 bg-light"></div>
                <div className="col-8 bg-light">
                    <ItineraryMap/>
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
                <ItineraryList/>
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
