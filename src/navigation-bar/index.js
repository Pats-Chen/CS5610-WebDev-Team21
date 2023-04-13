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
                                <a className="nav-link text-dark" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#">View profile</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#">New plan</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#">Sign out</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
export default NavigationBar;