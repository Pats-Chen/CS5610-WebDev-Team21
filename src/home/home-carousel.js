import React from "react";
import {Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function HomeCarousel () {
    const { currentUser } = useSelector((state) => state.users);
    return (
        <div id="myCarousel" className="carousel slide mb-0" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                        className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="/img/boston-night-carousel.jpg" className="bd-placeholder-img" width="100%" height="100%"/>

                    <div className="container">
                        <div className="carousel-caption text-start">
                            {currentUser && (<>
                                    <h1>Welcome back, {currentUser.username}!</h1>
                                    <p>View profile details</p>
                                    <p><Link className="btn btn-lg btn-primary" to={`/travelAdvisor/profile/${currentUser._id}`}>Profile</Link></p>

                                </>
                            )}
                            {!currentUser && (<>
                                    <h1>SIGN UP TODAY</h1>
                                    <p>start preparing for your future travel</p>
                                    <p><Link className="btn btn-lg btn-primary" to="/travelAdvisor/signup">Sign up</Link></p>
                                </>
                                )}
                        </div>
                    </div>
                </div>

                <div className="carousel-item">
                    <img src="/img/seattle-night-carousel.jpg" className="bd-placeholder-img" width="100%" height="100%"/>

                    <div className="container">
                        <div className="carousel-caption">
                            {currentUser && (<>
                                    <h1>CREATE YOUR OWN PLAN</h1>
                                    <p>search your distinction and build your trip</p>
                                    <p><Link className="btn btn-lg btn-primary" to="/travelAdvisor/create">Create</Link></p>
                                </>
                                )}
                            {!currentUser && (<>
                                    <h1>CREATE YOUR OWN PLAN in 5 MINUTES</h1>
                                    <p>sign up and create your own plan</p>
                                    <p><Link className="btn btn-lg btn-primary" to="/travelAdvisor/signup">Sign up & Create</Link></p>
                                </>
                            )}
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="/img/sanfrancisco-night-carousel.jpg" className="bd-placeholder-img" width="100%" height="100%"/>

                    <div className="container">
                        <div className="carousel-caption text-end">
                            {currentUser && (<>
                                    <h1>SHARE YOUR PLANS</h1>
                                    <p>build relationship with others and join their journey</p>
                                    <p><Link className="btn btn-lg btn-primary" to="/travelAdvisor/myplans">My plans</Link></p>
                                </>
                            )}
                            {!currentUser && (<>
                                    <h1>EXPLORE OTHERS PLANS</h1>
                                    <p>There is always one plan that can inspire your dream</p>
                                    <p><Link className="btn btn-lg btn-primary" to="/travelAdvisor/signup">See plans</Link></p>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel"
                    data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#myCarousel"
                    data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default HomeCarousel