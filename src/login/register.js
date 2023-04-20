import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {registerThunk} from "../services/users-thunks";
import {useDispatch} from "react-redux";

const Signup = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [username, setUsername] = useState("");
    let [userStatus, setUserStatus] = useState("free");

    const signupClickHandler = async () => {
        const newUser = {
            emailAddress: email,
            password: password,
            username: username,
            userStatus: userStatus,
            firstName: "",
            lastName: "",
            website: "",
            bio: "",
            location: "",
            phoneNumber: "",
            dateOfBirth: "",
            profileImage: "",
            followers: 0,
            following: 0,
            planNumber: 0,
            followingList: [],
            followersList: [],
            planList: [],
        }
        const data = await dispatch(registerThunk(newUser));
        console.log(data);
        if(data.type === "users/register/fulfilled") navigate("/travelAdvisor/login");
        else alert("Register failed, please choose another user name.");
    }

    return (
        <>
            <div className="bg-light rounded-2 p-2 container" style={{marginTop: '130px', textAlign: 'left'}}>
                <h3>Signup</h3>
                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form2Username">Username</label>
                    <input className="mb-2 form-control" id="form2Username"
                           onChange={(e) => setUsername(e.target.value)}
                           placeholder="username"/>
                </div>

                <div className="form-outline mb-3">
                    <label className="form-label" htmlFor="form2Password">Create a password</label>
                    <input className="mb-2 form-control" id="form2Password"
                           onChange={(e) =>
                               setPassword(e.target.value)}
                           placeholder="password" type="password"/>
                </div>

                <div className="form-outline mb-4">
                    <label className="form-label" htmlFor="form2Email">Email</label>
                    <input className="mb-2 form-control" id="form2Email"
                           onChange={(e) =>
                               setEmail(e.target.value)}
                           placeholder="email" type="email"/>
                </div>

                <div className="form-outline mb-3">
                    <div>
                        <label className="form-label">Would you like to be a premium user?</label>
                    </div>
                    <div className="form-check form-check-inline ms-1">
                        <input
                            className="form-check-input"
                            type="radio"
                            id="paidYes"
                            name="paidSubscription"
                            value="premium"
                            onChange={(e) =>
                                setUserStatus(e.target.value)
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
                            value="free"
                            onChange={(e) =>
                                setUserStatus(e.target.value)
                            }
                        />
                        <label className="form-check-label" htmlFor="paidNo">
                            No
                        </label>
                    </div>
                </div>

                <button className="btn btn-primary mb-3" onClick={signupClickHandler}>Register</button>
                <div className="text-center">
                    <p>Already have an account? <Link to="/travelAdvisor/login" className="text-decoration-none">
                        Login</Link> now
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
}
export default Signup;
