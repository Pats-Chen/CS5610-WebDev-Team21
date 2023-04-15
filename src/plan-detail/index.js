import React from "react";
import ItineraryList from "./itinerary-list";
import ItineraryMap from "./itinerary-map";
import {useLoadScript} from "@react-google-maps/api";
import './index.css';

const PlanDetailComponent = () => {
    const { isLoaded } = useLoadScript({
                                           googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY});
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
