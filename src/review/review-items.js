import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteReviewThunk} from "../services/reviews-thunks";
import {getUserProfile} from "../services/user-service";
import {Link} from "react-router-dom";

const ReviewItems = (review)=>{
    const {currentUser} = useSelector((state) => state.users);
    const dispatch = useDispatch();

    const deleteClickHandler = ()=>{
        dispatch(deleteReviewThunk(review.review._id));
        window.location.reload();
    }

    const [Owner, setOwner]= useState(null);

    useEffect(() => {
        async function fetchData() {
            const userProfile = await getUserProfile(review.review.authorId);
            setOwner(userProfile);
        }
        fetchData();
    }, []);

    return (
        <div>
            <div className="row d-flex mb-3">
                <div className="col-1">
                    <div className="text-end ps-3 pt-1">
                        <Link to={`/travelAdvisor/profile/${Owner && Owner._id}`} >
                            <img
                                src={`${process.env.PUBLIC_URL}/img/${Owner && Owner.profileImage ? Owner.profileImage : "no-user-icon.svg"}`}
                                alt={`${process.env.PUBLIC_URL}/img/${Owner && Owner.profileImage ? Owner.profileImage : "no-user-icon.svg"}`}
                                className="border rounded-circle mr-2"
                                style={{ height: "40px" }}
                            />
                        </Link>
                    </div>
                </div>

                <div className="col-9">
                    <div>
                        <div className="text-success">
                            {review.review.authorName}
                            <span className="text-muted ps-2">
                                    {new Date(review.review.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                </span>
                        </div>
                        <div className="text-info d-block">
                            {review.review.content}
                        </div>
                    </div>
                </div>
                <div className="col-2">
                    <div className="float-end ps-3 pt-1">
                        {
                            (review.review.authorId === currentUser._id  || currentUser.userStatus === "admin") &&
                            <div className="col-1">
                                <button className="btn btn-danger btn-sm rounded-pill" onClick={deleteClickHandler}>
                                    Delete
                                </button>
                            </div>
                        }
                    </div>
                </div>
            </div>
            <hr/>
        </div>
    );
};

export default ReviewItems;
