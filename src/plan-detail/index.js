import React, {useEffect, useState} from "react";
import ItineraryList from "./itinerary-list";
import ItineraryMap from "./itinerary-map";
import MyReviews from "../review/index.js"

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
    const{planId} = useParams();
    const dispatch = useDispatch();
    const {currentUser} = useSelector((state) => state.users);
    const {reviews} = useSelector((state) => state.reviews);
    const [reviewValue, setReviewValue] = React.useState("");


    // hardcode demoID：
    const [planOwnerId,setPlanOwnerId] = useState(null);
    const [displayPlan,setDisplayPlan] = useState(null);
    const [planOwner, setPlanOwner]= useState(null);



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
            authorName: currentUser.firstName + " " + currentUser.lastName,
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
            <h5>Plan Id: {displayPlan.planCreator}</h5>
            <div className="container row bg-light rounded-top-2 ps-5 m-0">
                <div className="col-2 bg-light"></div>
                <div className="col-8 bg-light">

                    {/*displayPlan.plan.locations[0].location.lat*/}
                    {/*<ItineraryClusterMarker/>*/}
                    <ItineraryMap plan = {displayPlan}></ItineraryMap>

                </div>
                <div className="col-2 bg-light"></div>
            </div>

            {/*Placeholder for navigation to Owner's profile*/}
            <div className="container my-3">
                <div className="row bg-light rounded-top-2 ps-5 align-items-center flex-wrap">
                    <div className="col-12 col-md-1 bg-light mb-3 mb-md-0">
                        <Link to={`/travelAdvisor/profile/${planOwnerId}`} >
                        <img
                            src={`${process.env.PUBLIC_URL}/img/${planOwner?.profileImage || "default-avatar.png"}`}
                            alt=""
                            className="border rounded-circle"
                            style={{ height: "60px" }}    />

                    </Link>
                    </div>
                    <div className="col-12 col-md-11 bg-light text-start">
                        {planOwner && (
                            <div className="d-flex justify-content-between">
                                <div>
                                    <h4 className="form-label mb-0">
                                        Plan Owner: {planOwner.username}
                                    </h4>
                                    <p className="mb-0">Plan description: {displayPlan.planName}</p>
                                </div>
                                <button
                                    className="btn btn-primary align-self-start"
                                    onClick={() =>
                                        (window.location.href = `/travelAdvisor/profile/${planOwnerId}`)
                                    }
                                >
                                    View Profile
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>




            {/*Placeholder ends here*/}
            <div className="container bg-light pb-2 rounded-bottom-2">
                <ItineraryList plan={displayPlan}></ItineraryList>
            </div>




            {/*review part*/}


            {/* write review */}
            {!currentUser &&
                <div style={{ textAlign: "center", marginTop: "20px", marginBottom:"10px" }}>
                    <h5 style={{ marginBottom: "10px" }}>Please login to see review</h5>
                    <span>
        <Link to="/travelAdvisor/login" style={{ textDecoration: "none" }}>Login</Link> now
    </span>
                </div>

            }
            { currentUser &&

            <div className="d-flex mb-3 mt-4">
                <a href="">
                    <img
                        src={`${process.env.PUBLIC_URL}/img/${currentUser?.profileImage || "default-avatar.png"}`}
                        className="border rounded-circle mr-2"
                        alt=""
                        style={{ height: "40px", marginRight: "10px" }}
                    />
                </a>
                <div className="form-outline w-100">
          <textarea
              className="form-control"
              id="textAreaExample"
              rows="2"
              value={reviewValue}
              placeholder = "Write a review"
              onChange = {(e) => setReviewValue(e.target.value)}

          > </textarea>
                    <label
                        className="form-label "
                        htmlFor="textAreaExample"
                    >
                        Write a comment
                    </label>
                    <button onClick={addReviewHandler} className="mt-2 btn btn-primary float-end" type="button">Post</button>
                </div>
            </div> }

            {/* MyReviews component */}

            { reviews && <MyReviews reviews={reviews} > </MyReviews>}




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
