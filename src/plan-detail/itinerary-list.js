import React from "react";
import ItineraryItem from "./itinerary-item";

const ItineraryList = (plan) => {
    // console.log(plan)
    // console.log(plan.plan)
    return (
        <>
            <ul className="list-group">
                <li className="list-group-item">
                    <h3>Start</h3>
                </li>
                {plan.plan.locations.map(item => <ItineraryItem key ={item.placeId} item={item}/>)}
                <li className="list-group-item">
                    <h3>End</h3>
                </li>
            </ul>
        </>
    )
}

export default ItineraryList;
