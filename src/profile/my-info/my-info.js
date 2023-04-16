import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";





const MyInfo = () => {
    const {currentUser} = useSelector((state) => state.users);

    return  currentUser && (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="container">
                        <div className="text-c">
                            <div className="card mb-3 mt-3">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <p className="mb-0">User ID</p>
                                        </div>
                                        <div className="col-sm-8">
                                            <p className="text-muted mb-0">{currentUser._id}</p>
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <p className="mb-0">First name</p>
                                        </div>
                                        <div className="col-sm-8">
                                            <p className="text-muted mb-0">{currentUser.firstName}</p>
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <p className="mb-0">Last Name</p>
                                        </div>
                                        <div className="col-sm-8">
                                            <p className="text-muted mb-0">{currentUser.lastName}</p>
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <p className="mb-0">Email address</p>
                                        </div>
                                        <div className="col-sm-8">
                                            <p className="text-muted mb-0">{currentUser.emailAddress}</p>
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <p className="mb-0">Phone number</p>
                                        </div>
                                        <div className="col-sm-8">
                                            <p className="text-muted mb-0">{currentUser.phoneNumber}</p>
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <p className="mb-0">Website</p>
                                        </div>
                                        <div className="col-sm-8">
                                            <p className="text-muted mb-0">{currentUser.website}</p>
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <p className="mb-0">Location</p>
                                        </div>
                                        <div className="col-sm-8">
                                            <p className="text-muted mb-0">{currentUser.location}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row text-center">
                                <div className="container mb-3">
                                    <Link to="/travelAdvisor/profile/myprofileedit"
                                          className="btn btn-primary"
                                          role="button">Edit Profile</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyInfo;
