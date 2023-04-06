import React from "react";
import MyEachReview from "./my-review-items.js";
import reviews from "../data/reviews.json"


const MyReviews = () => {
    return (
        <div className="container mt-3">
            <div className="row">
                {reviews.map(review =>
                    <MyEachReview key={review._id} userinfo={review}/>)
                }
            </div>
        </div>
    );
}
export default MyReviews;