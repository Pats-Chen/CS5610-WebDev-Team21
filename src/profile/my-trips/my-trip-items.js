import React from "react";
const MyTripItem =  ({
                         summary = {
                             "id": "123",
                             "place": "Seattle",
                             "owner": "Mozhi",
                             "participant": "AAA,BBB,CCC",
                             "description": "A three day trip around Seattle"
                         }
                     })=>{
    // console.log(summary)
    // console.log(summary.place)
    return(
        <div className="col-lg-4 col-sm-6">
            <svg className="bd-placeholder-img rounded-circle" width="140" height="140"
                 xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140"
                 preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                <rect width="100%" height="100%" fill="#777"/>
                <text x="50%" y="50%" fill="#777" dy=".3em">140x140</text>
            </svg>

            <h2 className="fw-normal"> {summary.place}</h2>
            <p>{summary.description}</p>
            <p>created by: {summary.owner}</p>
            <p>who is onboard: {summary.participant}</p>
            <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
        </div>
    )
}

export default MyTripItem;