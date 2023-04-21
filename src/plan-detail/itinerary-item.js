import React from "react";
import {useNavigate} from "react-router-dom";
const ItineraryItem = (
    {
        item = {"address": "Times Square",
            "location": ["lat","lng"],
            "name": "Starts Daily at 9 am and 10 am Duration: 6 Hours Departs/Ends on 7th Avenue (50th/51st) Open-Top or Glass-Top Convertible Bus"}
    }

) => {
    const navigate = useNavigate()
    const onclickHandler =()=>{
        navigate('/travelAdvisor/place_detail/'+item.placeId)
        navigate(0)
    }
    return(
        <li className="list-group-item">
            <div className="pb-2">
                <h5>{item.name}</h5>
                <div>Stop: 15min</div>
                <div>{item.address}</div>
            </div>
            <div>
                <button className="btn btn-primary rounded-pill float" onClick={onclickHandler}>See more details</button>
            </div>
        </li>
    );
};
export default ItineraryItem;

