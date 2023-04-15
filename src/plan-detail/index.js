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
            <div className="row">
                <div className="col-3">
                    <h1>Itinerary</h1>
                    <ItineraryList/>
                </div>
                <div className="col-9">
                    <ItineraryMap/>
                </div>
            </div>
        </>
    )
};

export default PlanDetailComponent;
