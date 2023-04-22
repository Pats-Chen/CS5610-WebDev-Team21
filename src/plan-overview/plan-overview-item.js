import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const PlanOverviewItem = (
    {
        planOverview = {
            "_planID": 1,
            "planName": "Plan 1",
            "planCreator": "11",
            "planOwner": "11",
            "planDescription": "This is a example of a plan.",
            "planStops": [ {
                "stopName": "Stop 1",
                "stopLocation": [42.3456, -71.0987],
                "stopTime": "1 day",
                "stopIsEnd": true
            }],
            "planCover": "fenway-park.jpg"
        }
    }
) => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return (
        <>
            <div className="col-md-4">
                <div className="card mb-4 box-shadow">
                    <img className="card-img-top"
                         src={`${process.env.PUBLIC_URL}/img/${planOverview.planCover}`}
                         alt={`${planOverview.planCover}`}
                         style={{height: "225px", width: "100%", display: "block"}}/>
                        <div className="card-body">
                            <div className="justify-content-between align-items-center">
                                <div className="row">
                                    <div className="col-4">
                                        <i className="fa fa-plane-departure fa-1x pe-1" style={{color: "seagreen"}}></i>
                                        <span className="text-muted">{`${planOverview.planName}`}</span>
                                    </div>
                                    <div className="col-4">
                                        <i className="fa fa-user fa-1x pe-1" style={{color: "seagreen"}}></i>
                                        <span className="text-muted">{`${planOverview.planOwner}`}</span>
                                    </div>
                                    <div className="col-4">
                                        <i className="fa fa-map-pin fa-1x pe-1" style={{color: "seagreen"}}></i>
                                        <span className="text-muted">{`${planOverview.planStops.length}`}</span>
                                    </div>
                                </div>
                            </div>

                            <p className="card-text">{`${planOverview.planDescription}`}</p>
                        </div>
                    <Link to="/travelAdvisor/detail" className="stretched-link"/>
                </div>
            </div>
        </>
    );
}

export default PlanOverviewItem;