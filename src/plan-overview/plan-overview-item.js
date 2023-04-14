import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const PlanOverviewItem = (
    {
        planOverview = {
            "_id": 1,
            "userID": "11",
            "userName": "Alice",
            "planName": "Example Plan 1",
            "planCover": "fenway-park.jpg",
            "planCreateTime": "2023-01-01T00:00:00.000Z",
            "planDescription": "This is a example of a plan.",
            "reviews": 543,
            "reviewed": true,
            "likes": 789,
            "liked": true
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
                            <p className="card-text">{`${planOverview.planDescription}`}</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="row">
                                    <div className="col-6">
                                        { planOverview.reviewed && <i className="fa fa-comment fa-1x pe-1"
                                                                          style={{color: "forestgreen"}}></i>}
                                        {!planOverview.reviewed && <i className="fa fa-comment fa-1x pe-1"
                                                                          style={{color: "dimgray"}}></i>}
                                        <span className="text-muted">{`${planOverview.reviews}`}</span>
                                    </div>
                                    <div className="col-6">
                                        { planOverview.liked && <i className="fa fa-heart fa-1x pe-1"
                                                                       style={{color: "red"}}></i>}
                                        {!planOverview.liked && <i className="fa fa-heart fa-1x pe-1"
                                                                       style={{color: "dimgray"}}></i>}
                                        <span className="text-muted">{`${planOverview.likes}`}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </>
    );
}

export default PlanOverviewItem;