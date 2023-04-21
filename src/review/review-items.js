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

            <div className="d-flex mb-3">
                <Link to={`/travelAdvisor/profile/${Owner && Owner._id}`} >
                    <img
                        src={`${process.env.PUBLIC_URL}/img/${Owner && Owner.profileImage ? Owner.profileImage : "default-avatar.png"}`}
                        className="border rounded-circle mr-2"
                        alt=""
                        style={{ height: "40px" }}
                    />

            </Link>
                <div>
                    <div className=" rounded-lg px-3 py-1">
                        <a href="" className="text-dark mb-0 d-flex">
                            <strong>{review.review.authorName}  </strong> <small style={{ textDecoration: "none", margin: "0 0 0 10px" }}>
                            {new Date(review.review.date).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </small>




                        </a>
                        <p className="text-muted d-block">
                            <small>{review.review.content}</small>
                        </p>
                    </div>
                </div>

                {
                    (review.review.authorId === currentUser._id  || currentUser.userStatus === "admin") &&
                    <div className="col-1">
                        <button className="rounded-pill btn btn-danger btn-sm" onClick={deleteClickHandler}>
                            Delete
                        </button>
                    </div>
                }




            </div>

        </div>
    );
};

export default ReviewItems;
