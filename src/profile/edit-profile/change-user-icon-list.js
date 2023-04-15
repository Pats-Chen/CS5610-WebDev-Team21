import React from "react";
import iconArray from "./icons.json";
import ChangeUserIconItem from "./change-user-icon-item";

const PlanSummaryList = () =>{
    return(
        <div className="container marketing bg-light rounded-2 pt-3 pb-3">
            <div className="row">
                {iconArray.map(icon => <ChangeUserIconItem key ={icon._iconID} icon={icon}/>)}
            </div>
        </div>
    )
};

export default PlanSummaryList