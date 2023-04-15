import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
import './index.css';

const NavigationBar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    const navigationBarLogoClickHandler = () => {
        console.log("navigationBarLogoClickHandler");
    }
    return (
        <div className="container-fluid">
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={`${process.env.PUBLIC_URL}/img/logo.svg`} width="30" height="30" alt=""
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
                            <li className="nav-item">
                                <Link to="/travelAdvisor/login" className="nav-link text-dark">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/travelAdvisor/signup" className="nav-link text-dark">Signup</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/travelAdvisor/profile/myprofile" className="nav-link text-dark">Profile</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/travelAdvisor/profile/myprofileedit" className="nav-link text-dark">Edit profile</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/travelAdvisor/profile/myprofilechooseicon" className="nav-link text-dark">Choose icon</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/travelAdvisor/profile/mytrips" className="nav-link text-dark">My trips</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/travelAdvisor/create" className="nav-link text-dark">Create new plan</Link>
                            </li>
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