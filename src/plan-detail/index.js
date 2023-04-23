import React, {useEffect, useState} from "react";
import ItineraryList from "./itinerary-list";
import ItineraryMap from "./itinerary-map";
import MyReviews from "../review/index.js";

import {Link, useParams} from "react-router-dom";
import {useLoadScript} from "@react-google-maps/api";
import {createReviewThunk, findReviewByPlanIdThunk} from "../services/reviews-thunks.js";
import {getUserProfile} from "../services/user-service";
import {getPlanById} from "../services/travel-plan-service";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import './index.css';

const PlanDetailComponent = () => {
    const { isLoaded } = useLoadScript({
                                           googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY});
    const {planId} = useParams();
    const dispatch = useDispatch();
    const {currentUser} = useSelector((state) => state.users);
    const {reviews} = useSelector((state) => state.reviews);
    const [reviewValue, setReviewValue] = React.useState("");

    const [planOwnerId,setPlanOwnerId] = useState(null);
    const [displayPlan,setDisplayPlan] = useState(null);
    const [planOwner, setPlanOwner]= useState(null);

    const navigate = useNavigate();

    // find Reviews by planId
    useEffect(() => {
        if (currentUser) {
            dispatch(findReviewByPlanIdThunk(planId));
        }
    }, [currentUser]);

    // add review
    const addReviewHandler = () => {
        const newReview = {
            planId: planId,
            authorId: currentUser._id,
            authorName: currentUser.username,
            authorImg: currentUser.profileImage,
            content: reviewValue,
            date: new Date(),
        }
        dispatch(createReviewThunk(newReview));
        setReviewValue("");
        window.location.reload()
    }

    // find plan by planId
    useEffect(() => {
        async function fetchData() {
            const displayPlanHolder = await getPlanById(planId);
            const userProfile = await getUserProfile(displayPlanHolder.data.planOwner);
            setPlanOwnerId(displayPlanHolder.data.planOwner)
            setPlanOwner(userProfile);
            setDisplayPlan(displayPlanHolder.data)
            // console.log(displayPlan);
            // console.log(displayPlanHolder);
        }
        fetchData();
    }, [planId]);
    // useEffect(() => {
    //     setDisplayPlan(displayPlan);
    // }, [displayPlan]);



    if (!isLoaded) return <div>Loading...</div>
    return displayPlan && (
        <>
            {/*Placeholder for navigation to Owner's profile*/}
            <div className="container row bg-light pt-2 pb-2 m-0 rounded-top">
                <div className="col-2 bg-light"></div>
                <div className="col-8 bg-light">
                    <div className="card container">
                        <div className="row container card-body">
                            <div className="col-6">
                                <div className="row pb-2 text-center">
                                    <div className="">
                                        <Link to={`/travelAdvisor/profile/${planOwnerId}`}>
                                            <img
                                                src={`${process.env.PUBLIC_URL}/img/${planOwner?.profileImage || "no-user-icon.svg"}`}
                                                alt={`${process.env.PUBLIC_URL}/img/${planOwner?.profileImage || "no-user-icon.svg"}`}
                                                className="border rounded-circle"
                                                style={{ height: "80px" }}    />
                                        </Link>
                                    </div>
                                </div>
                                <div className="row flex-wrap">
                                    {planOwner && (
                                        <div className="d-flex justify-content-center">
                                            <button
                                                className="btn btn-primary align-self-start rounded-pill"
                                                onClick={() => (
                                                    window.location.href = `/travelAdvisor/profile/${planOwnerId}`
                                                )}>
                                                View Profile
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="col-6 mt-3">
                                <div className="row flex-wrap">
                                    <div className="col-sm-2">
                                        <i className="fa fa-user" style={{color: "seagreen"}}/>
                                    </div>
                                    <div className="col-sm-10">
                                        <p className="text-muted mb-0">{planOwner.username}</p>
                                    </div>
                                </div>
                                <div className="row flex-wrap">
                                    <div className="col-sm-2">
                                        <i className="fa fa-suitcase" style={{color: "seagreen"}}/>
                                    </div>
                                    <div className="col-sm-10">
                                        <p className="text-muted mb-0">{displayPlan.planName}</p>
                                    </div>
                                </div>
                                <div className="row flex-wrap">
                                    <div className="col-sm-2">
                                        <i className="far fa-id-card" style={{color: "seagreen"}}/>
                                    </div>
                                    <div className="col-sm-10">
                                        <p className="text-muted mb-0">{planId}</p>
                                    </div>
                                </div>
                                <div className="row flex-wrap">
                                    <div className="col-sm-2">
                                        <i className="fa fa-info-circle" style={{color: "seagreen"}}/>
                                    </div>
                                    <div className="col-sm-10">
                                        <p className="text-muted mb-0">{displayPlan.planDescription}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-2 bg-light"></div>
            </div>

            <div className="container row bg-light m-0">
                <div className="col-2 bg-light"></div>
                <div className="col-8 bg-light">
                    <ItineraryMap plan = {displayPlan}></ItineraryMap>
                </div>
                <div className="col-2 bg-light"></div>
            </div>

            {/*Placeholder ends here*/}
            <div className="container row bg-light pb-2 pt-2 m-0 rounded-bottom">
                <div className="col-2 bg-light"></div>
                <div className="col-8 bg-light">
                    <ItineraryList plan={displayPlan}></ItineraryList>
                </div>
                <div className="col-2 bg-light"></div>
            </div>

            {/*review part*/}
            {/* MyReviews component */}
            <div className="container row bg-light pb-2 pt-2 m-0 rounded-">
                <div className="col-2 bg-light"></div>
                <div className="col-8 bg-light">
                    <div className="card">
                        <div className="card-header">
                            <strong>Reviews</strong>
                        </div>
                        <div className="card-body">
                            { reviews && <MyReviews reviews={reviews}/>}

                            {/* write review */}
                            <div>
                                <div className="row d-flex">
                                    <div className="col-1">
                                        <div className="text-end ps-1 pt-1">
                                            { currentUser &&
                                                <div className="d-flex">
                                                    <img src={`${process.env.PUBLIC_URL}/img/${currentUser?.profileImage || "no-user-icon.svg"}`}
                                                         alt={`${process.env.PUBLIC_URL}/img/${currentUser?.profileImage || "no-user-icon.svg"}`}
                                                         className="border rounded-circle mr-2"
                                                         style={{ height: "40px", marginRight: "10px" }}/>
                                                </div>
                                            }
                                        </div>
                                    </div>

                                    <div className="col-9">
                                        {!currentUser &&
                                            <div style={{ textAlign: "center", marginTop: "20px", marginBottom:"10px" }}>
                                                <h5 style={{ marginBottom: "10px" }}>Please login to see review</h5>
                                                <span>
                                                        <Link to="/travelAdvisor/login" style={{ textDecoration: "none" }}>Login</Link> now
                                                    </span>
                                            </div>
                                        }
                                        { currentUser &&
                                            <>
                                                <label className="form-label d-none" htmlFor="reviewTextArea"/>
                                                <textarea className="form-control"
                                                          id="reviewTextArea"
                                                          rows="2"
                                                          value={reviewValue}
                                                          placeholder = "Write a review here..."
                                                          onChange = {(e) => setReviewValue(e.target.value)}/>
                                            </>
                                        }
                                    </div>
                                    <div className="col-2">
                                        <div className="float-end ps-3 pt-1">
                                            { currentUser &&
                                                <button onClick={addReviewHandler} className="btn btn-primary mt-2 float-start rounded-pill" type="button">Post</button>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-2 bg-light"></div>
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

export default PlanDetailComponent;
