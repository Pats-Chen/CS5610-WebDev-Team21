import React from "react";
import ProfileNavBar from "./profile-nav-bar/profile-nav-bar.js";
import MyProfileInfoComponent from "./my-info/my-info";

function ProfileInfo(){
    return (
        <>
            <div >
                <ProfileNavBar/>
            </div>
            <div>
                <MyProfileInfoComponent/>
            </div>
            <div className="mt-5">

                <p className="float-end"><a href="#">Back to top</a></p>
                <p>&copy; Team21. CS5610. NEU. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>

            </div>
        </>
    )
}

export default ProfileInfo;