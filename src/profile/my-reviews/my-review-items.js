import React from "react";
import { useSelector } from "react-redux";
import {findReviewByPlanIdThunk} from "../../services/reviews-thunks.js";
import { useDispatch } from "react-redux";
import {useEffect} from "react";
import {useState} from "react";
import {getPlanById} from "../../services/travel-plan-service.js";
import {Link} from "react-router-dom";

const MyReviewItems = ({ review }) => {
    const { currentUser } = useSelector((state) => state.users);
    const [plan, setPlan] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // find plan by planId
    useEffect(() => {
        async function fetchData() {
            const userPlan = await getPlanById(review.planId);
            setPlan(userPlan.data);
            setIsLoading(false);
        }
        fetchData();
    }, [review.planId]);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    const date = new Date(review.date).toLocaleString();
    return (
        <>
            <div className="col-lg-4 col-sm-6">
                <section className="mx-auto my-5" style={{ maxWidth: "20rem" }}>
                    <div className="card">
                        <div className="card-body d-flex flex-row">
                            <div>
                                <h5 className="card-title font-weight-bold mb-2">
                                    Plan title: {plan && plan.planName}
                                </h5>
                                <p className="card-text">
                                    <i className="far fa-clock pe-2"></i>
                                    {date}
                                </p>
                                <p>
                                   My comment: {review.content}
                                </p>
                            </div>
                        </div>
                        <div
                            className="bg-image hover-overlay ripple rounded-0"
                            data-mdb-ripple-color="light"
                        >
                            <a href="#!">
                                <div
                                    className="mask"
                                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                                ></div>
                            </a>
                        </div>
                        <div className="card-body">
                            <div className="d-flex justify-content-between">
                                <Link to={`/travelAdvisor/detail/${review.planId}`}>
                                <a
                                    className="btn btn-link link-danger p-md-1 my-1"
                                    role="button"
                                    aria-expanded="false"
                                    aria-controls="collapseContent"
                                >
                                    See my comment
                                </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default MyReviewItems;