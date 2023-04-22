import React from "react";
import iconArray from "./icons.json";
import ChangeUserIconItem from "./change-user-icon-item";

const PlanSummaryList = () =>{
    return(
        <>
            <div className="container marketing bg-light rounded-2 pt-3 pb-3">
                <div className="row">
                    {iconArray.map(icon => <ChangeUserIconItem key ={icon._iconID} icon={icon}/>)}
                </div>
            </div>
            <div>
                <footer>
                    <p className="float-end text-muted"><a href="#">Back to top</a></p>
                    <p className="text-muted">&copy; Team 21 &middot; CS5610 &middot; Northeastern University &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
                </footer>
            </div>
        </>
    )
};

export default PlanSummaryList