import React from "react";
import MyReviewItem from "./my-review-items.js";
import reviews from "../data/reviews.json"

const MyReviews = () => {
    return (
        <div className="container mt-3">
            <div className="row">
                {reviews.map(review =>
                    <MyReviewItem key={review._id} userinfo={review}/>)
                }
            </div>
        </div>
    );
}
export default MyReviews;