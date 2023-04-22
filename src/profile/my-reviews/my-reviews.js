import React from "react";
import MyReviewItem from "./my-review-items.js";
import reviews from "../data/reviews.json"
import ProfileNavBar from "../profile-nav-bar/profile-nav-bar";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {findReviewsByAuthorThunk} from "../../services/reviews-thunks.js";
import {useEffect} from "react";


const MyReviews = () => {
    const dispatch = useDispatch();
    const {currentUser} = useSelector((state) => state.users);
    const {reviews} = useSelector((state) => state.reviews);

    useEffect(() => {
        if (currentUser) {
            dispatch(findReviewsByAuthorThunk(currentUser._id));
        }
    }, [currentUser]);
    console.log(reviews)

    return (

        <>
            <div className="container bg-light">
                <ProfileNavBar/>
            </div>

            {reviews.length === 0 && (
                <div className="container bg-light rounded-bottom">
                    <div className="row justify-content-center">
                        <div className="col-md-6 text-center py-4 bg-light border rounded">
                            <h4 className="mb-3">You have not reviewed any plans yet.</h4>
                            <p>Please explore more travel plans and share your experience with others.</p>
                        </div>
                    </div>
                </div>
            )}

            <div className="container bg-light rounded-bottom">
                <div className="row">
                    {reviews && reviews.map(review =>
                        <MyReviewItem key={review._id} review={review} />)
                    }
                </div>

            </div>
            <div>
                <footer>
                    <p className="float-end text-muted"><a href="#">Back to top</a></p>
                    <p className="text-muted">&copy; Team 21 &middot; CS5610 &middot; Northeastern University &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
                </footer>
            </div>
        </>
    );
}
export default MyReviews;