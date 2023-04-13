import React from "react";
import summaryArray from "./trip-summary-item.json";
import TripSummaryViewItem from "./trip-summary-view-item";


const TripSummaryList = () =>{
    // console.log(summaryArray)
    return(
        <div className="container marketing">
            <div className="row">
                {summaryArray.map(summary =>
                    <TripSummaryViewItem key ={summary._id} summary={summary}/>)
                }
            </div>
        </div>
    )
};

export default TripSummaryList