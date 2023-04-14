import React from "react";
import {Link} from "react-router-dom";
import {Routes, Route} from "react-router";

import HomeComponent from "../home/index.js";
import LoginComponent from "../login/login";
import SignupComponent from "../login/register";
import NavigationBar from "../navigation-bar";
import PlanSummaryList from "../trip-summary-view/plan-summary-list";
import MapComponent from "../createTravelPlan/map";
import ProfileInfoComponent from "../profile/my-profile-info";
import ProfileTripsComponent from "../profile/my-profile-trips";
import ProfileEditComponent from "../profile/my-profile-edit";

function TravelAdvisor() {
    return (
        <main>
            <style>
                {`
                    .bd-placeholder-img {
                    font-size: 1.125rem;
                    text-anchor: middle;
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    user-select: none;
                }
    
                    @media (min-width: 768px) {
                    .bd-placeholder-img-lg {
                    font-size: 3.5rem;
                }
                }
    
                    .b-example-divider {
                    height: 3rem;
                    background-color: rgba(0, 0, 0, .1);
                    border: solid rgba(0, 0, 0, .15);
                    border-width: 1px 0;
                    box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
                }
    
                    .b-example-vr {
                    flex-shrink: 0;
                    width: 1.5rem;
                    height: 100vh;
                }
    
                    .bi {
                    vertical-align: -.125em;
                    fill: currentColor;
                }
    
                    .nav-scroller {
                    position: relative;
                    z-index: 2;
                    height: 2.75rem;
                    overflow-y: hidden;
                }
    
                    .nav-scroller .nav {
                    display: flex;
                    flex-wrap: nowrap;
                    padding-bottom: 1rem;
                    margin-top: -1px;
                    overflow-x: auto;
                    text-align: center;
                    white-space: nowrap;
                    -webkit-overflow-scrolling: touch;
                }
                `}
            </style>

            <header>
                <NavigationBar/>
            </header>

            <div>
                <Routes>
                    <Route path="/" element={<HomeComponent/>}/>
                    <Route path="home" element={<HomeComponent/>}/>
                    <Route path="login" element={<LoginComponent/>}/>
                    <Route path="signup" element={<SignupComponent/>}/>
                    <Route path="profile/myprofile" element={<ProfileInfoComponent/>}/>
                    <Route path="profile/myprofileedit" element={<ProfileEditComponent/>}/>
                    <Route path="profile/mytrips" element={<ProfileTripsComponent/>}/>
                    <Route path="create" element={<MapComponent/>}/>
                </Routes>
            </div>
        </main>
    );
}

export default TravelAdvisor