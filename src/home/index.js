import React from "react";
import {Link} from "react-router-dom";
import NavigationBar from "../navigation-bar";
import PlanOverview from "../plan-overview";

const HomeComponent = () => {
    return(
        <>
            <NavigationBar/>

            <PlanOverview/>
        </>
    );
};
export default HomeComponent;