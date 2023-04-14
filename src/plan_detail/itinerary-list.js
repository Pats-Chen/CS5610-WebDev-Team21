import React from "react";
import itineraryArray from "./itinerary.json"
import ItineraryItem from "./itinerary-item";

const ItineraryList = () => {
    return (
        <ul className="list-group">
            <li className="list-group-item">
                <h5>You'll start at</h5>
            </li>
            {
                itineraryArray.map(item =>
                                 <ItineraryItem
                                     item={item}/>
                )
            }
            <li className="list-group-item">
                <h3>You'll return to the starting point</h3>
            </li>
        </ul>
    )
}

export default ItineraryList;
