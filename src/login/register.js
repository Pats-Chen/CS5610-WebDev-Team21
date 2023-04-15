import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import * as usersService from "../services/user-service";

const Signup = () => {
    const [newUser, setNewUser] = useState({});
    const navigate = useNavigate();

    const signup = () =>
        usersService.signup(newUser)
            .then(() => navigate('/'))
            .catch(e => alert(e));
    return (
        <>
            <div className="bg-light rounded-2 p-2" style={{marginTop: '130px', textAlign: 'left'}}>
                <h3>Signup</h3>
                <div className="form-outline mb-3">
                    <label className="form-label" htmlFor="form2Email">Email address</label>
                    <input className="mb-2 form-control" id="form2Email"
                           onChange={(e) =>
                               setNewUser({...newUser, email: e.target.value})}
                           placeholder="Email" type="email"/>
                </div>
                <div className="form-outline mb-3">
                    <label className="form-label" htmlFor="form2Username">Username</label>
                    <input className="mb-2 form-control" id="form2Username"
                           onChange={(e) =>
                               setNewUser({...newUser, username: e.target.value})}
                           placeholder="Username"/>
                </div>
                <div className="form-outline mb-3">
                    <label className="form-label" htmlFor="form2Password">Create a password</label>
                    <input className="mb-2 form-control" id="form2Password"
                           onChange={(e) =>
                               setNewUser({...newUser, password: e.target.value})}
                           placeholder="Password" type="password"/>
                </div>
                <button className="btn btn-primary mb-3" onClick={signup}>Register</button>
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