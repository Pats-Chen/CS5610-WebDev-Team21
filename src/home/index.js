import React from "react";
import "./homepage.css";
import HomeCarousel from "./home-carousel";
import PlanSummaryList from "../trip-summary-view/plan-summary-list.js";
import PlanOverview from "../plan-overview/index";

function Home(){
    return(
        <>
            <HomeCarousel/>

            <div className="row featurette container-fluid bg-light" >
                <div className="col-md-9" >
                    <h2 className="featurette-heading fw-normal lh-1">Plan a Trip
                        <span className="text-muted"> Can't be any easier.</span></h2>
                    <p className="lead">Plan a trip to anywhere you want to go &
                        <span className="text-muted">join a fantaiscic trip created by others.</span></p>
                </div>
            </div>

            <PlanOverview/>

            <footer className="container bg-light">
                <p className="float-end"><a href="#">Back to top</a></p>
                <p>&copy; Team21. CS5610. NEU. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
            </footer>
        </>
    )
}

export default Home

