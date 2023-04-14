import React from "react";
const ItineraryItem = (
    {
        item = {"sightName": "Times Square",
            "stayTime": 15,
            "description": "Starts Daily at 9 am and 10 am Duration: 6 Hours Departs/Ends on 7th Avenue (50th/51st) Open-Top or Glass-Top Convertible Bus"}
    }
) => {
    return(
        <li className="list-group-item">
            <div>
                <h5>{item.sightName}</h5>
                <div>Stop: {item.stayTime} min</div>
                <div>{item.description}</div>
                <button className="btn btn-primary rounded-pill float">See more details</button>
            </div>
        </li>
    );
};
export default ItineraryItem;