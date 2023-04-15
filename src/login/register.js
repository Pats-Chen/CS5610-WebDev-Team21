import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import * as usersService from "../services/user-service";
import {loginThunk, logoutThunk, registerThunk} from "../services/users-thunks";
import {useDispatch} from "react-redux";

const Signup = () => {
    const [newUser, setNewUser] = useState({"paidSubscriber":"no"});
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const signup = () =>
    //     usersService.signup(newUser)
    //         .then(() => navigate('/'))
    //         .catch(e => alert(e));
    const signup = async () =>{
        try {
            await dispatch(logoutThunk());
            await dispatch(registerThunk(newUser));
            navigate('/');
        }  catch (err) {
        console.log(err);
    }}
    return (
        <>
            <div className="bg-light rounded-2 p-2" style={{ textAlign: 'left'}}>
                <h3>Signup</h3>
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form2Username">Username</label>
                    <input className="mb-2 form-control" id="form2Username"
                           onChange={(e) =>
                               setNewUser({...newUser, username: e.target.value})}
                           placeholder="username"/>
                </div>

                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form2Password">Password</label>
                    <input className="mb-2 form-control" id="form2Password"
                           onChange={(e) =>
                               setNewUser({...newUser, password: e.target.value})}
                           placeholder="password" type="password"/>
                </div>

                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form2Email">Email</label>
                    <input className="mb-2 form-control" id="form2Email"
                           onChange={(e) =>
                               setNewUser({...newUser, email: e.target.value})}
                           placeholder="email" type="email"/>
                </div>

                <div className="form-outline mb-4">
                    <label className="form-label">Would you like to be a subscriber?</label>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            id="paidYes"
                            name="paidSubscription"
                            value="yes"
                            onChange={(e) =>
                                setNewUser({...newUser, paidSubscriber: e.target.value})
                            }
                        />
                        <label className="form-check-label" htmlFor="paidYes">
                            Yes
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            id="paidNo"
                            name="paidSubscription"
                            value="no"
                            onChange={(e) =>
                                setNewUser({...newUser, paidSubscriber: e.target.value})
                            }
                        />
                        <label className="form-check-label" htmlFor="paidNo">
                            No
                        </label>
                    </div>
                </div>

                <button onClick={signup} className="btn btn-primary mb-5">Register</button>
                <div className="text-center">
                    <p>Already have an account? <Link to="/travelAdvisor/login" className="text-decoration-none">
                        Login</Link> now
                    </p>
                </div>

            </div>

            <div className="mt-5 bg-light rounded-2">

                <p className="float-end"><a href="#">Back to top</a></p>
                <p>&copy; Team21. CS5610. NEU. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>

            </div>
        </>
    );
}
export default Signup;