import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";





const MyInfo = () => {
    const {currentUser} = useSelector((state) => state.users);


    return  currentUser && (
                <div className="container mt-5">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <div
                                className="profile-card text-center"
                                style={{
                                    border: "1px solid #ddd",
                                    borderRadius: "10px",
                                    padding: "20px",
                                }}
                            >
                                <h2 className="mb-3 ml-100px">
                                    {currentUser.firstName} {currentUser.lastName}
                                </h2>
                                <p className="text-muted">{currentUser.username}</p>
                                <p>
                                    <strong>Email:</strong> {currentUser.emailAddress}
                                </p>
                                <p>
                                    <strong>Phone:</strong> {currentUser.phoneNumber}
                                </p>
                                <p>
                                    <strong>Website:</strong>
                                    {currentUser.website}{" "}
                                </p>
                                <p>
                                    <strong>Location:</strong> {currentUser.location}
                                </p>
                                <p className="text-muted">{currentUser.bio}</p>
                                <button className="btn btn-primary">
                                    <Link to="/travelAdvisor/profile/myprofileedit" style={{ color: "white" }}>
                                        Edit Details
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
    )
}

export default MyInfo;