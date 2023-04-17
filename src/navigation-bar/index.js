import React from "react";
import {Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import './index.css';

const NavigationBar = () => {

    const { currentUser } = useSelector((state) => state.users);
    const navigationBarLogoClickHandler = () => {
        console.log("navigationBarLogoClickHandler");
    }
    return (
        <div className="container-fluid">
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={`${process.env.PUBLIC_URL}/img/logo.svg`} width="30" height="30"
                             alt={`${process.env.PUBLIC_URL}/img/logo.svg`}
                             className="rounded-circle bg-success"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse"
                            aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link to="/travelAdvisor/home" className="nav-link text-dark">Home</Link>
                            </li>

                            {!currentUser && (
                                <>
                                    <li className="nav-item">
                                        <Link to="/travelAdvisor/login" className="nav-link text-dark">Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/travelAdvisor/signup" className="nav-link text-dark">Signup</Link>
                                    </li>
                                </>
                            )}

                            {currentUser && (
                                <>
                                    <li className="nav-item">
                                        <Link to={`/travelAdvisor/profile/myprofile`} className="nav-link text-dark">Profile</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={`/travelAdvisor/profile/${currentUser._id}`} className="nav-link text-dark">Profile</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/travelAdvisor/myplans" className="nav-link text-dark">My plans</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/travelAdvisor/create" className="nav-link text-dark">Create new plan</Link>
                                    </li>
                                </>
                            )}

                            <li className="nav-item">
                                <Link to="/travelAdvisor/detail" className="nav-link text-dark">Plan detail</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
export default NavigationBar;
