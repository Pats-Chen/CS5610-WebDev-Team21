import React from "react";
import "./homepage.css";
import homeCarousel from "./home-carousel";
import HomeCarousel from "./home-carousel";
import PlanSummaryList from "../trip-summary-view/plan-summary-list.js";
import {Link} from "react-router-dom";
import NavigationBar from "../navigation-bar";
import PlanOverview from "../plan-overview";

function Home(){
    return(
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
                <Link to="/">Home</Link> |
                <Link to="/login">Login</Link> |
                <Link to="/createTravelPlan">CreateTravelPlan</Link>
            </div>
            
            <HomeCarousel/>

            <div className="row  featurette container-fluid bg-opacity-50" >
                <div className="col-md-9" >
                    <h2 className="featurette-heading fw-normal lh-1">Plan a Trip
                        <span className="text-muted"> Can't be any easier.</span></h2>
                    <p className="lead">Plan a trip to anywhere you want to go &
                        <span className="text-muted">join a fantaiscic trip created by others.</span></p>
                </div>
            </div>

            <PlanSummaryList/>

            <footer className="container">
            <p className="float-end"><a href="#">Back to top</a></p>
            <p>&copy; Team21. CS5610. NEU. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
            </footer>

        </main>
    )
}

export default Home

