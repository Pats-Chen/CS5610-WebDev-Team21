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
                    <div className="card mb-3 mt-3">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-sm-2">
                                    <i className="fa fa-suitcase"/>
                                </div>
                                <div className="col-sm-10">
                                    <p className="text-muted mb-0">{plan && plan.planName}</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-2">
                                    <i className="far fa-clock"/>
                                </div>
                                <div className="col-sm-10">
                                    {date}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-2">
                                    <i className="fa fa-feather"/>
                                </div>
                                <div className="col-sm-10">
                                    <p className="text-muted mb-0">{review.content}</p>
                                </div>
                            </div>
                            <hr/>
                            <div className="row text-center">
                                <p className="text-muted mb-0">
                                    <Link to={`/travelAdvisor/detail/${review.planId}`}
                                          className="btn btn-primary p-md-1 my-1"
                                          role="button"
                                          aria-expanded="false"
                                          aria-controls="collapseContent">
                                        Check
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default MyReviewItems;