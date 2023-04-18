import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteReviewThunk} from "../services/reviews-thunks";


const ReviewItems = (review)=>{

    const {currentUser} = useSelector((state) => state.users)
    const dispatch = useDispatch();


    return (
        <div>

            <div className="d-flex mb-3">
                <a href="">
                    <img
                        src={`${process.env.PUBLIC_URL}/img/${review.review.authorImg}`}
                        className="border rounded-circle mr-2"
                        alt=""
                        style={{ height: "40px" }}
                    />
                </a>
                <div>
                    <div className=" rounded-lg px-3 py-1">
                        <a href="" className="text-dark mb-0 d-flex">
                            <strong>{review.review.authorName}</strong>
                        </a>
                        <p className="text-muted d-block">
                            <small>{review.review.content}</small>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ReviewItems;
