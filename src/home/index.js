import React from "react";
import "./homepage.css";
import HomeCarousel from "./home-carousel";
import PlanSummaryList from "../trip-summary-view/plan-summary-list.js";
import PlanOverview from "../plan-overview/index";

function Home(){
    return(
        <>
            <HomeCarousel/>

            <div className="container">
                <div className="row bg-light" >
                    <div className="col-md-9" >
                        <h2 className="featurette-heading fw-normal lh-1">Creating a travel plan
                            <span className="text-muted"> can't be any easier.</span></h2>
                        <p className="lead ms-1">Create a plan to anywhere you want to go or
                            <span className="text-muted"> join a fantastic travel created by others.</span></p>
                    </div>
                </div>
            </div>

            <PlanOverview/>

            <div>
                <footer>
                    <p className="float-end text-muted"><a href="#">Back to top</a></p>
                    <p className="text-muted">&copy; Team 21 &middot; CS5610 &middot; Northeastern University &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
                </footer>
            </div>
        </>
    )
}

export default Home

