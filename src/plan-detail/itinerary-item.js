import React from "react";
import {Link, useNavigate} from "react-router-dom";
const ItineraryItem = ({item = {
            "_id": {"$oid": "643f55d2d545679c419dc31d"},
            "placeId": "ChIJwZVT9ZpZwokRBfO1cTF0MNo",
            "name": "New York University",
            "address": "New York, NY 10012, United States",
            "timeOfStay": 45,
            "location": {"lat": 40.72951339999999, "lng": -73.9964609}}
}) => {
    const navigate = useNavigate()
    const onclickHandler =()=>{
        navigate('/travelAdvisor/place_detail/'+item.placeId)
        navigate(0)
    }
    return(
        <li className="list-group-item">
            <div className="pb-2">
                <div className="row container">
                    <div className="col-2">
                        <div className="row container pt-4">
                            <i className="fa fa-ellipsis-v fa-2x pb-2" style={{color: "seagreen"}}/>
                            <i className="fa fa-ellipsis-v fa-2x pb-2" style={{color: "seagreen"}}/>
                            <i className="fa fa-ellipsis-v fa-2x pb-2" style={{color: "seagreen"}}/>
                            <i className="fa fa-ellipsis-v fa-2x pb-2" style={{color: "seagreen"}}/>
                        </div>
                    </div>
                    <div className="col-10 mt-3">
                        <div className="row flex-wrap">
                            <div className="col-sm-2">
                                <i className="fa fa-map-marker fa-1x" style={{color: "seagreen"}}/>
                            </div>
                            <div className="col-sm-10">
                                <p className="text-muted mb-0">{item.name}</p>
                            </div>
                        </div>
                        <div className="row flex-wrap">
                            <div className="col-sm-2">
                                <i className="far fa-clock fa-1x" style={{color: "seagreen"}}/>
                            </div>
                            <div className="col-sm-10">
                                <p className="text-muted mb-0">{item.timeOfStay} minutes</p>
                            </div>
                        </div>
                        <div className="row flex-wrap">
                            <div className="col-sm-2">
                                <i className="fa fa-globe-asia fa-1x" style={{color: "seagreen"}}/>
                            </div>
                            <div className="col-sm-10">
                                <p className="text-muted mb-0">{item.address}</p>
                            </div>
                        </div>
                        <div className="row flex-wrap">
                            <div className="col-sm-2">
                                <i className="fa fa-compass" style={{color: "seagreen"}}/>
                            </div>
                            <div className="col-sm-10">
                                <p className="text-muted mb-0">({item.location.lat}, {item.location.lng})</p>
                            </div>
                        </div>
                        <hr/>
                        <div className="row text-center">
                            <div>
                                <button className="btn btn-primary rounded-pill float" onClick={onclickHandler}>Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};
export default ItineraryItem;

