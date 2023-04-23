import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {getUserProfile} from "../services/user-service";
import {logoutThunk} from "../services/users-thunks";
import './index.css';


const NavigationBar = () => {
    const { userId } = useParams()
    const {currentUser} = useSelector((state) => state.users)
    const [displayedUser, setDisplayedUser] = useState(currentUser);
    const dispatch = useDispatch()
    const logout = async () =>{
        try {
            localStorage.removeItem('travel_list');
            await dispatch(logoutThunk());
        } catch (err) {
            console.log(err);
        }
    };


    useEffect(() => {
        async function fetchData() {
            if (userId) {
                const userProfile = await getUserProfile(userId);
                setDisplayedUser(userProfile);
            }
        }
        fetchData();
    }, []);
    return (
        <div className="container-fluid">
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-light">
                <div className="container-fluid">
                    <Link to="#" className="navbar-brand">
                        <img src={`${process.env.PUBLIC_URL}/img/logo.svg`} width="30" height="30"
                             alt={`${process.env.PUBLIC_URL}/img/logo.svg`}
                             className="rounded-circle bg-success"/>
                    </Link>
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
                                        <Link to={`/travelAdvisor/profile`} className="nav-link text-dark">Profile</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to={`/travelAdvisor/profile/${currentUser._id}`} className="nav-link text-dark">
                                            <img src={`${process.env.PUBLIC_URL}/img/${currentUser.profileImage}`} width="30" height="30"
                                                 alt={`${process.env.PUBLIC_URL}/img/${currentUser.profileImage}`}
                                                 className="rounded-circle bg-white"/>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/travelAdvisor/home"
                                              className="nav-link text-dark"
                                              onClick={logout}>Log out</Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link to="/travelAdvisor/myplans" className="nav-link text-dark">My plans</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/travelAdvisor/myreviews" className="nav-link text-dark">My reviews</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/travelAdvisor/create" className="nav-link text-dark">Create new plan</Link>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
export default NavigationBar;
