import React from "react";
import ProfileNavBar from "./profileNavBar/profile-nav-bar.js";
import {Routes, Route} from "react-router";
import MyTrips from "./myTrips/my-trips.js";
import MyReviews from "./myReviews/my-reviews.js";
import EditProfile from "./editProfile/edit-profile";
import MyInfo from "./myInfo/my-info";
import FollowingList from "./followingList/index.js";
import FollowerList from "./followerList/index.js";



function Profile(){
    return (
        <>

            <div className="mt-3 mb-3"> main Nav bar</div>

            <div >
                    <ProfileNavBar/>
                </div>
                <div>
                    <Routes>
                        <Route path="*"     element={<MyInfo/>}/>
                        <Route path="/mytrips"        element={<MyTrips/>}/>
                        <Route path="/myreviews"  element={<MyReviews/>}/>
                        <Route path="/editprofile" element={<EditProfile/>}/>
                        <Route path="/followingList" element={<FollowingList/>}/>
                        <Route path="/followerList" element={<FollowerList/>}/>

                    </Routes>

                </div>
              <div className="mt-5">

                  <p className="float-end"><a href="#">Back to top</a></p>
                  <p>&copy; Team21. CS5610. NEU. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>

              </div>

        </>
    )
}


export default Profile;