import React from "react";
import ItineraryItem from "./itinerary-item";

const ItineraryList = (plan) => {
    // console.log(plan)
    // console.log(plan.plan)
    return (
        <>
            <ul className="list-group">
                <li className="list-group-item">
                    <i className="fa fa-flag fa-2x ps-3" style={{color: "seagreen"}}/>
                </li>
                {plan.plan.locations.map(item => <ItineraryItem key ={item.placeId} item={item}/>)}
                <li className="list-group-item">
                    <i className="fa fa-flag-checkered fa-2x ps-3" style={{color: "seagreen"}}/>
                </li>
            </ul>
        </>
    )
}

export default ItineraryList;
