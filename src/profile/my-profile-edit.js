import React from "react";
import ProfileNavBar from "./profile-nav-bar/profile-nav-bar.js";
import EditProfileComponent from "./edit-profile/edit-profile";

function ProfileTrips(){
    return (
        <>
            <div className="container bg-light">
                <ProfileNavBar/>
            </div>
            <div className="container bg-light rounded-bottom">
                <EditProfileComponent/>
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