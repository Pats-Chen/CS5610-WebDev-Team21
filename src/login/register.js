import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import * as usersService from "../services/user-service";
import {loginThunk, logoutThunk, registerThunk} from "../services/users-thunks";
import {useDispatch, useSelector} from "react-redux";

const Signup = () => {
    const { currentUser } = useSelector((state) => state.users);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const signup = () =>
    //     usersService.signup(newUser)
    //         .then(() => navigate('/'))
    //         .catch(e => alert(e));
    // const signup = async () =>{
    //     try {
    //         await dispatch(logoutThunk());
    //         await dispatch(registerThunk(newUser));
    //         navigate('/profile');
    //     }  catch (err) {
    //     console.log(err);
    // }}



    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [username, setUsername] = useState("");
    let [paidSubscriber, setPaidSubscriber] = useState("no");

    const signupClickHandler =  async () => {
        const newUser = {
            emailAddress: email,
            password: password,
            username: username,
            paidSubscriber: paidSubscriber,
            firstName: "",
            lastName: "",
            website: "",
            bio: "",
            location:"",
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
        await dispatch(registerThunk(newUser));
        navigate('/travelAdvisor/login');
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
                            value="yes"
                            onChange={(e) =>
                                setPaidSubscriber(e.target.value)
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
                                setPaidSubscriber(e.target.value)
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
                    <p className="text-muted">&copy; Team 21 &middot; CS5610 &middot; Northeastern University &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
                </footer>
            </div>
        </>
    );
}
export default Signup;
