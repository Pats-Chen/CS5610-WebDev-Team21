import MyReviews from "../review";
import React, {useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {createReviewThunk, findReviewByPlanIdThunk} from "../services/reviews-thunks.js";
import { useDispatch } from "react-redux";


function ReviewComponent() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {currentUser} = useSelector((state) => state.users);
    const {reviews} = useSelector((state) => state.reviews);
    const [reviewValue, setReviewValue] = React.useState("");


    useEffect(() => {
        if (currentUser) {
            dispatch(findReviewByPlanIdThunk(currentUser._id));
        }
    }, [currentUser, dispatch, reviews]);


    const addReviewHandler = () => {
        const newReview = {
            planId: currentUser._id, // *** no plan id yet, using userId for now
            authorId: currentUser._id,
            authorName: currentUser.firstName + " " + currentUser.lastName,
            authorImg: currentUser.profileImage,
            content: reviewValue,
            date: new Date(),
        }
        dispatch(createReviewThunk(newReview));
        setReviewValue("")

    }

    return (
        <>
            {/* write review */}
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
                    <button onClick={addReviewHandler} className="btn  float-end" type="button">Post</button>
                </div>
            </div>

            {/* MyReviews component */}

            { reviews && <MyReviews reviews={reviews} > </MyReviews>}
        </>
    );
}

export default ReviewComponent;
