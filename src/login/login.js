import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {loginThunk, logoutThunk} from "../services/users-thunks";
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
    }}
    const logout = async () =>{
        try {
            await dispatch(logoutThunk());
        } catch (err) {
            console.log(err);
        }
};
    return (
        <div style={{ textAlign: 'left'}}>
            <h3>Login</h3>
            {/*a demo to show that state.user is invoked*/}
            {currentUser && (<h2>Welcome {currentUser.username}</h2>)}
            {currentUser && (<button onClick={logout} className = "btn btn-primary">log out</button>)}
            {/* demo ends here*/}
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
    );
};

export default Login;