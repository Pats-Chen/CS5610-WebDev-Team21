import React from "react";
import "./homepage.css";
import HomeCarousel from "./home-carousel";
import PlanOverview from "../plan-overview/index";

function Home(){
    return(
        <>
            <HomeCarousel/>

            <div className="container bg-light rounded-bottom">
                <div className="row">
                    <div className="col-md-9">
                        <h2 className="featurette-heading fw-normal lh-1 ps-3">Creating a travel plan
                            <span className="text-muted"> can't be any easier.</span></h2>
                        <p className="lead ms-1 ps-3">Create a plan to anywhere you want to go or
                            <span className="text-muted"> join a fantastic travel created by others.</span></p>
                    </div>
                </div>
            </div>

            <div className="container bg-light rounded-2">
                {/*<h2 className="featurette-heading fw-normal lh-1 ps-3">My plans</h2>*/}
                <PlanOverview>CurrentUser</PlanOverview>
            </div>
            <div className="container bg-light rounded-2">
                {/*<h2 className="featurette-heading fw-normal lh-1 ps-3">Admin view</h2>*/}
                <PlanOverview>Admin</PlanOverview>
            </div>
            <div className="container bg-light rounded-2">
                {/*<h2 className="featurette-heading fw-normal lh-1 ps-3">Recommendation</h2>*/}
                <PlanOverview>Recommendation</PlanOverview>
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

export default Home

