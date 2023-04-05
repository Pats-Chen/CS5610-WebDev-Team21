import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationBar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return (
        <>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                <a className="navbar-brand" href="https://www.google.com">Travel Advisor</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04"
                        aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarsExample04">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="https://www.google.com">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://www.google.com">User Profile</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://www.google.com">Create New Travel Plan</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://www.google.com">Logout</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="https://www.google.com" id="dropdown04"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                            <div className="dropdown-menu" aria-labelledby="dropdown04">
                                <a className="dropdown-item" href="https://www.google.com">Home</a>
                                <a className="dropdown-item" href="https://www.google.com">User Profile</a>
                                <a className="dropdown-item" href="https://www.google.com">Create New Travel Plan</a>
                                <a className="dropdown-item" href="https://www.google.com">Logout</a>
                            </div>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-md-0">
                        <input className="form-control" type="text" placeholder="Search"/>
                    </form>
                </div>
            </nav>
        </>
    );
}
export default NavigationBar;