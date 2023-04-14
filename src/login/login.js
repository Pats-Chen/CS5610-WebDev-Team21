import {Link, useNavigate} from "react-router-dom";
import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {loginThunk} from "../services/users-thunks";
import * as service from "../services/user-service";

export const Login = () => {
    const { currentUser } = useSelector((state) => state.users);
    const [loginUser, setLoginUser] = useState({});
    const navigate = useNavigate()
    const dispatch = useDispatch();
    // login: if success --> navigate to home screen
    const login = async () =>{
        // service.login(loginUser)
        //     .then((user) => navigate('/'))
        //     .catch(e => alert(e));
    try {
        await dispatch(loginThunk(loginUser));
        // navigate("/travelAdvisor/login");

    } catch (err) {
        console.log(err);
    }
};
    return (
        <>
            <div className="bg-light rounded-2 p-2" style={{ textAlign: 'left'}}>
                <h3>Login</h3>
                {/*a demo to show that state.user is invoked*/}
                {currentUser && (<h2>Welcome {currentUser.username}</h2>)}
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form2Username">Username</label>
                    <input onChange={(e) =>
                        setLoginUser({...loginUser, username: e.target.value})}
                           type="text" id="form2Username" className="form-control"/>
                </div>
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form2Password">Password</label>
                    <input onChange={(e) =>
                        setLoginUser({...loginUser, password: e.target.value})}
                           type="password" id="form2Password" className="form-control"/>

                </div>
                <button onClick={login} type="button" className="btn btn-primary btn-block mb-4">Login</button>

                <div className="text-center">
                    <p>Don't have an account? <Link to="/travelAdvisor/signup" className="text-decoration-none">
                        Register</Link> now
                    </p>
                </div>
            </div>

            <div className="mt-5 bg-light rounded-2">

                <p className="float-end"><a href="#">Back to top</a></p>
                <p>&copy; Team21. CS5610. NEU. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>

            </div>
        </>
    );
};

export default Login;