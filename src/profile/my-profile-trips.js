import React from "react";
import ProfileNavBar from "./profile-nav-bar/profile-nav-bar.js";
import PlanOverview from "../plan-overview/index";

function ProfileTrips(){
    return (
        <>
            <div className="container bg-light">
                <ProfileNavBar/>
            </div>
            <div className="container bg-light">
                <PlanOverview/>
            </div>
            <div className="mt-5 bg-light">

                <p className="float-end"><a href="#">Back to top</a></p>
                <p>&copy; Team21. CS5610. NEU. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>

            </div>
        </>
    )
}

export default ProfileTrips;