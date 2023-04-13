import React from "react";
import summaryArray from "./plan-summary-item.json";
import PlanSummaryViewItem from "./plan-summary-view-item";

const PlanSummaryList = () =>{
    // console.log(summaryArray)
    return(
        <div className="container marketing">
            <div className="row">
                {summaryArray.map(summary =>
                    <PlanSummaryViewItem key ={summary._planID} summary={summary}/>)
                }
            </div>
        </div>
    )
};

export default PlanSummaryList