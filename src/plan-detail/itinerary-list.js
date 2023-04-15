import React from "react";
import itineraryArray from "./itinerary.json"
import ItineraryItem from "./itinerary-item";

const ItineraryList = () => {
    return (
        <>
            <ul className="list-group">
                <li className="list-group-item">
                    <h3>Start</h3>
                </li>
                {itineraryArray.map(item => <ItineraryItem item={item}/>)}
                <li className="list-group-item">
                    <h3>End</h3>
                </li>
            </ul>
        </>
    )
}

export default ItineraryList;
