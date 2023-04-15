import React from "react";

const PlanSummaryViewItem = ({
                                 summary = {
                                     "_planID":"123",
                                     "planName": "Seattle Trip",
                                     "planCreator": "0x456789",
                                     "planOwner": "0x456789",
                                     "planDescription": "A three day trip around Seattle",
                                     "planStops": [{
                                         "stopName": "Seattle",
                                         "stopLocation": [81, 40],
                                         "stopTime": "12:10:03",
                                         "isEnd": true
                                     }]
                                 },
                             })=>{
    // console.log(summary)
    // console.log(summary.place)
    return(
        <div className="col-lg-4">
            <svg className="bd-placeholder-img rounded-circle" width="140" height="140"
                 xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140"
                 preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                <rect width="100%" height="100%" fill="#777"/>
                <text x="50%" y="50%" fill="#777" dy=".3em">140x140</text>
            </svg>

            <h2 className="fw-normal"> {summary.planName}</h2>
            <p>{summary.planDescription}</p>
            <p>created by: {summary.planCreator}</p>
            <p>owner of the plan: {summary.planOwner}</p>
            <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
        </div>
    )
};

export default PlanSummaryViewItem

