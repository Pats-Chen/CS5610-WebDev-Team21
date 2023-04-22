import React from "react";
import ProfileNavBar from "./profile-nav-bar/profile-nav-bar.js";
import PlanOverview from "../plan-overview/index";

function ProfileTrips(){
    return (
        <>
            <div className="container bg-light rounded-bottom">
                <ProfileNavBar/>
            </div>
            <div className="container bg-light rounded-2">
                {/*<h2 className="featurette-heading fw-normal lh-1 ps-3">My plans</h2>*/}
                <PlanOverview>CurrentUser</PlanOverview>
            </div>
            <div className="container bg-light rounded-2">
                {/*<h2 className="featurette-heading fw-normal lh-1 ps-3">Admin view</h2>*/}
                <PlanOverview>Admin</PlanOverview>
            </div>
            <div>
                <footer>
                    <p className="float-end text-muted"><a href="#">Back to top</a></p>
                    <p className="text-muted">&copy; Team 21 &middot; CS5610 &middot; Northeastern University &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
                </footer>
            </div>
        </>
    )
}

export default ProfileTrips;