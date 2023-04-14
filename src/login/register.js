import {useState} from "react";
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
        <div style={{ textAlign: 'left'}}>
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

            <button onClick={signup} className="btn btn-primary mb-5">Register</button>
            <div className="text-center">
                <p>Already have an account? <Link to="/travelAdvisor/login" className="text-decoration-none">
                    Login</Link> now
                </p>
            </div>

        </div>
    );
}
export default Signup;