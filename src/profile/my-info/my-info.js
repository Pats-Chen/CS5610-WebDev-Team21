import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { useParams } from 'react-router-dom';
import {getUserProfile} from "../../services/user-service";




const MyInfo = () => {
    const { userId } = useParams()
    const {currentUser} = useSelector((state) => state.users);
    const [displayedUser, setDisplayedUser] = useState(currentUser);
    // useEffect(() => {
    //     if (currentUser) { // check if currentUser exists before setting displayedUser
    //         setDisplayedUser(currentUser);
    //     }
    // }, [currentUser]);
    useEffect(() => {
        async function fetchData() {
            if (userId) {
                const userProfile = await getUserProfile(userId);
                setDisplayedUser(userProfile);
            }
        }
        fetchData();
    }, []);

    // useEffect(() => {
    //     console.log(displayedUser);
    // }, [displayedUser]);

    return  displayedUser && (
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
                                            <p className="text-muted mb-0">{displayedUser._id}</p>
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <p className="mb-0">First name</p>
                                        </div>
                                        <div className="col-sm-8">
                                            <p className="text-muted mb-0">{displayedUser.firstName}</p>
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <p className="mb-0">Last Name</p>
                                        </div>
                                        <div className="col-sm-8">
                                            <p className="text-muted mb-0">{displayedUser.lastName}</p>
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <p className="mb-0">Email address</p>
                                        </div>
                                        <div className="col-sm-8">
                                            <p className="text-muted mb-0">{displayedUser.emailAddress}</p>
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <p className="mb-0">Phone number</p>
                                        </div>
                                        <div className="col-sm-8">
                                            <p className="text-muted mb-0">{displayedUser.phoneNumber}</p>
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <p className="mb-0">Website</p>
                                        </div>
                                        <div className="col-sm-8">
                                            <p className="text-muted mb-0">{displayedUser.website}</p>
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className="row">
                                        <div className="col-sm-4">
                                            <p className="mb-0">Location</p>
                                        </div>
                                        <div className="col-sm-8">
                                            <p className="text-muted mb-0">{displayedUser.location}</p>
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
