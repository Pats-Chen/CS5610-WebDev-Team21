import {Link, useNavigate} from "react-router-dom";
import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {loginThunk, logoutThunk} from "../services/users-thunks";
import {useEffect} from "react";


export const Login = () => {
    const { currentUser } = useSelector((state) => state.users);
    const [loginUser, setLoginUser] = useState({});
    const navigate = useNavigate()
    const dispatch = useDispatch();

    // login: if success --> navigate to home screen
    const login = async () =>{
        try {
            await dispatch(loginThunk(loginUser));
            navigate("/travelAdvisor/profile/myprofile");
        } catch (err) {
            console.log(err);
        }}

    const logout = async () =>{
        try {
            await dispatch(logoutThunk());
        } catch (err) {
            console.log(err);
        }
    };
    return  (

        <>
            <div className="bg-light rounded-2 p-2 container" style={{marginTop: '130px', textAlign: 'left'}}>
                <h3>Login</h3>
                {/*a demo to show that state.user is invoked*/}
                {currentUser && (<h2>Welcome {currentUser.username}</h2>)}
                {currentUser && (<button onClick={logout} className = "btn btn-primary">log out</button>)}
                {/* demo ends here*/}
                <div className="form-outline mb-3">
                    <label className="form-label" htmlFor="form2Username">Username</label>
                    <input onChange={(e) =>
                        setLoginUser({...loginUser, username: e.target.value})}
                           type="text" id="form2Username" className="form-control"/>
                </div>
                <div className="form-outline mb-3">
                    <label className="form-label" htmlFor="form2Password">Password</label>
                    <input onChange={(e) =>
                        setLoginUser({...loginUser, password: e.target.value})}
                           type="password" id="form2Password" className="form-control"/>

                </div>
                <button onClick={login} type="button" className="btn btn-primary btn-block mb-4">Login</button>

                <div className="text-center">
                    <p>Haven't got an account? <Link to="/travelAdvisor/signup" className="text-decoration-none">Register</Link> now
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
};

export default Login;
