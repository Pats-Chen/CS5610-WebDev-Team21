import React from "react";
import MyEachTrip from "./my-trip-items";
import tripsArray from "../data/trips.json"


const MyTrips = () => {
    return (
        <div className="container mt-3">
            <div className="row">

                {tripsArray.map(trip => <MyEachTrip key={trip._id} summary={trip} />)}

                }
            </div>
        </div>
    );
}

export default MyTrips;