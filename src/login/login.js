import {Link, useNavigate} from "react-router-dom";
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {loginThunk} from "../services/users-thunks";


export const Login = () => {
    const [loginUser, setLoginUser] = useState({});
    const navigate = useNavigate()
    const dispatch = useDispatch();

    // login: if success --> navigate to home screen
    const login = async () => {
        try {
            const data = await dispatch(loginThunk(loginUser));
            if (data.payload) {
                localStorage.setItem('userinfo', JSON.stringify(data.payload));
                navigate("/travelAdvisor/home");
            } else alert("Log in failed, please check your username and password.");
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <div className="container bg-light rounded-2 p-2" style={{marginTop: '130px'}}>
                <h3>Log in</h3>
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
                <button className="btn btn-primary btn-block mb-3"
                        onClick={login}
                        type="button" >Log in</button>
                <div className="text-center">
                    <p>
                        <span>Haven't got an account? </span>
                        <Link to="/travelAdvisor/signup" className="text-decoration-none">Sign up</Link>
                        <span> now</span>
                    </p>
                </div>
            </div>

            <div>
                <footer>
                    <p className="float-end text-muted"><a href="#">Back to top</a></p>
                    <p className="text-muted">&copy; Team 21 &middot; CS5610 &middot; Northeastern University &middot;
                        <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
                </footer>
            </div>
        </>
    );
};

export default Login;
