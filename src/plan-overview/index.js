import React, { useEffect, useState } from "react";
import PlanOverviewItem from "./plan-overview-item";
import { useSelector } from "react-redux";
import { adminGet, getAllPlansOfOneUser, getRecommendation } from "../services/travel-plan-service";


const PlanOverview = (usage) => {
    const { currentUser } = useSelector((state) => state.users);
    const [plan,setPlan] =useState(null);

    useEffect ( () =>{
        if (currentUser && currentUser.userStatus !== "admin" && usage.children === "CurrentUser") {
            // when logged in, return currentUser's plan
            getAllPlansOfOneUser(currentUser._id)
                .then((Holder) => {
                    if (plan === null) setPlan(Holder);
                })
                .catch((error) => {
                    console.log(error)
                });
        } else if (currentUser && currentUser.userStatus === "admin" &&
            usage.children === "Admin") {
            // handle admin case
            adminGet()
                .then((Holder) => {
                    if (plan === null) setPlan(Holder);

                })
                .catch((error) => {
                    console.log(error)

                });
        } else if (usage.children === "Recommendation"){
            //the force recommendation
            getRecommendation()
                .then((Holder) => {
                    if (plan === null) setPlan(Holder);

                })
                .catch((error) => {
                    console.log(error)
                });
        }else if (plan !== null){
            setPlan(null);
        }

    }, [currentUser, usage.children, plan]);


    return (
        <>
            {usage.children === "CurrentUser" && currentUser && currentUser.userStatus !== "admin" &&
                (<h2 className="featurette-heading fw-normal lh-1 ps-3">My plans</h2>) }
            {usage.children === "Admin" && currentUser && currentUser.userStatus === "admin" &&
                (<h2 className="featurette-heading fw-normal lh-1 ps-3">Admin view</h2>) }
            {usage.children === "Recommendation" &&
                (<h2 className="featurette-heading fw-normal lh-1 ps-3">Recommendation</h2>) }

            <div className="album pt-2 pb-2 bg-light">
                <div className="container">
                    <div className="row">
                        {plan && (<>{plan.map(planItem => <PlanOverviewItem key={planItem._id} planOverview={planItem}/>)}</>)}
                        {/*{planOverviewArray.map(planOverview => <PlanOverviewItem key={planOverview._id} planOverview={planOverview}/>)}*/}
                    </div>
                </div>
            </div>
        </>
    );
}
export default PlanOverview;