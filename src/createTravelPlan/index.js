import React, {Component} from "react";
import {Link} from "react-router-dom";
import Map from "./map";

class CreateTravelPlan extends Component {
    render() {
        return (
            <div>
                <Link to="/">Home</Link> |
                <Link to="/login">Login</Link> |
                <Link to="/createTravelPlan">CreateTravelPlan</Link>
                <Map/>
            </div>
        )
    }
}

export default CreateTravelPlan;