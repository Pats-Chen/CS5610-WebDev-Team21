import React from "react";
import {Link} from "react-router-dom";

function Home() {
    return (
        <div>
            <Link to="/">Home</Link> |
            <Link to="/login">Login</Link> |
            <Link to="/createTravelPlan">CreateTravelPlan</Link>
            <h1>Home</h1>
        </div>
    );
}

export default Home