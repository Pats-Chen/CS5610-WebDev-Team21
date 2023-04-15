import React from "react";

const ChangeUserIconItem = ({
                                 icon = {
                                     "_iconID":"15",
                                     "icon": "husky-dog-1358170.svg"},
                             })=>{
    const chooseIcon = (icon) => {
        console.log(icon);
    }
    return(
        <div className="col">
            <div className="me-3 ps-3 container">
                <img className="rounded-circle bg-white"
                     src={`${process.env.PUBLIC_URL}/img/${icon.icon}`}
                     alt={`${icon.icon}`}
                     style={{height: "150px", width: "150px"}}/>
            </div>
            <div className="container-fluid ps-5 pt-2 pb-2">
                <button className="btn btn-primary" onClick={() => alert(icon.icon)}>Choose</button>
            </div>
        </div>
    )
};

export default ChangeUserIconItem

