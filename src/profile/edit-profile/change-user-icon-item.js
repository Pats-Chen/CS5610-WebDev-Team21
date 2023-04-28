import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {updateUserThunk} from "../../services/users-thunks";

const ChangeUserIconItem = ({icon = {
                                 "_iconID":"15",
                                 "icon": "husky-dog-1358170.svg"}
                            }) => {

    const {currentUser} = useSelector((state) => state.users);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const saveIconChangeHandler = () => {
        const updatedProfile = {
            uid:currentUser._id,
            username: currentUser.username,
            firstName: currentUser.firstName,
            lastName: currentUser.lastName,
            website: currentUser.website,
            location: currentUser.location,
            emailAddress: currentUser.emailAddress,
            phoneNumber: currentUser.phoneNumber,
            dateOfBirth: currentUser.birthday,
            profileImage: icon.icon,
            bio: currentUser.bio,
        };
        dispatch(updateUserThunk(updatedProfile));
        navigate('/travelAdvisor/profile/myprofileedit');
    };

    return(
        <div className="col">
            <div className="me-3 ps-3 container">
                <img className="rounded-circle bg-white"
                     src={`${process.env.PUBLIC_URL}/img/${icon.icon}`}
                     alt={`${icon.icon}`}
                     style={{height: "150px", width: "150px"}}/>
            </div>
            <div className="container-fluid ps-5 pt-2 pb-2">
                <button className="btn btn-primary rounded-pill" onClick={saveIconChangeHandler}>Choose</button>
            </div>
        </div>
    )
};

export default ChangeUserIconItem

