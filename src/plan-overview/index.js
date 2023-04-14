import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
import PlanOverviewItem from "./plan-overview-item";
import planOverviewArray from "./plan-overviews.json";

const PlanOverview = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return (
        <>
            <div className="album py-3 bg-light">
                <div className="container">
                    <div className="row">
                        {planOverviewArray.map(planOverview => <PlanOverviewItem key={planOverview._id} planOverview={planOverview}/>)}
                    </div>
                </div>
            </div>
        </>
    );
}
export default PlanOverview;