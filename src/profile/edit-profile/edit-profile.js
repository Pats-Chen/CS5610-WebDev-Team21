import React from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {updateUserThunk} from "../../services/users-thunks";

const EditProfile = () => {

    const {currentUser} = useSelector((state) => state.users);
    let [firstName, setFirstName] = useState(currentUser.firstName);
    let [lastName, setLastName] = useState(currentUser.lastName);
    let [username, setUsername] = useState(currentUser.username);
    let [emailAddress, setEmailAddress] = useState(currentUser.emailAddress);
    let [phoneNumber, setPhoneNumber] = useState(currentUser.phoneNumber);
    let [website, setWebsite] = useState(currentUser.website);
    let [location, setLocation] = useState(currentUser.location);
    let [bio, setBio] = useState(currentUser.bio);
    let [birthday, setBirthday] = useState(currentUser.dateOfBirth);
    let [profileImage, setProfileImage] = useState(currentUser.profileImage);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const saveChangeHandler = () => {
        const updatedProfile = {
            uid:currentUser._id,
            username: username,
            firstName: firstName,
            lastName: lastName,
            website: website,
            location: location,
            emailAddress: emailAddress,
            phoneNumber: phoneNumber,
            dateOfBirth: birthday,
            profileImage: profileImage,
            bio: bio,
        };
        dispatch(updateUserThunk(updatedProfile));
        navigate('/travelAdvisor/profile/myprofile');
    };

    return currentUser && (
        <div className="container-xl px-4 pt-3">
            <div className="row">
                <div className="col-xl-4">
                    <div className="card mb-4">
                        <div className="card-header">Profile Picture</div>
                        <div className="card-body text-center">
                            <img
                                className="img-account-profile rounded-circle mb-2"
                                src={`${process.env.PUBLIC_URL}/img/${currentUser.profileImage}`}
                                alt={`${process.env.PUBLIC_URL}/img/${currentUser.profileImage}`}
                                // set width, height to 150px
                                style={{height: "150px", width: "150px"}}/>
                            <div>
                                <Link to="/travelAdvisor/choose_icon"
                                      className="btn btn-primary rounded-pill" role="button">Change</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-8">
                    <div className="card mb-4">
                        <div className="card-header">Account Details</div>
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label
                                        className="small mb-1"
                                        htmlFor="inputUsername"
                                    >
                                        Username
                                    </label>
                                    <input
                                        className="form-control"
                                        id="inputUsername"
                                        type="text"
                                        placeholder="Enter your username"
                                        value={username}
                                        onChange = {(event) => setUsername(event.target.value)}
                                    />
                                </div>

                                <div className="mb-3">
                                    <label
                                        className="small mb-1"
                                        htmlFor="inputEmail"
                                    >
                                        Email Address
                                    </label>
                                    <input
                                        className="form-control"
                                        id="inputLocation"
                                        type="text"
                                        placeholder="Enter your Email"
                                        value={emailAddress}
                                        onChange = {(event) => setEmailAddress(event.target.value)}
                                    />
                                </div>

                                <div className="row gx-3 mb-3">
                                    <div className="col-md-6">
                                        <label className="small mb-1"
                                               htmlFor="inputFirstName">
                                            First name
                                        </label>
                                        <input className="form-control"
                                               id="inputFirstName"
                                               type="text"
                                               placeholder="Enter your first name"
                                               value={firstName}
                                               onChange = {(event) => setFirstName(event.target.value)}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="small mb-1"
                                               htmlFor="inputLastName">
                                            Last name
                                        </label>
                                        <input className="form-control"
                                               id="inputLastName"
                                               type="text"
                                               placeholder="Enter your last name"
                                               value={lastName}
                                               onChange = {(event) => setLastName(event.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="row gx-3 mb-3">
                                    <div className="col-md-6">
                                        <label
                                            className="small mb-1"
                                            htmlFor="inputPhone">
                                            Phone Number
                                        </label>
                                        <input
                                            className="form-control"
                                            id="inputPhone"
                                            type="text"
                                            placeholder="Enter your Phone Number"
                                            value={phoneNumber}
                                            onChange = {(event) => setPhoneNumber(event.target.value)}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="small mb-1"
                                               htmlFor="inputLocation">
                                            Location
                                        </label>
                                        <input className="form-control"
                                               id="inputLocation"
                                               type="text"
                                               placeholder="Enter your location"
                                               value={location}
                                               onChange = {(event) => setLocation(event.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="row gx-3 mb-3">
                                    <div className="col-md-6">
                                        <label
                                            className="small mb-1"
                                            htmlFor="inputBD">
                                            Birthday
                                        </label>
                                        <input
                                            className="form-control"
                                            id="inputBD"
                                            type="text"
                                            placeholder="Enter your Phone Number"
                                            value = {birthday}
                                            onChange = {(event) => setBirthday(event.target.value)}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="small mb-1"
                                               htmlFor="inputOrgName">
                                            Website
                                        </label>
                                        <input className="form-control"
                                               id="inputOrgName"
                                               type="text"
                                               placeholder="Enter your website"
                                               value={website}
                                               onChange = {(event) => setWebsite(event.target.value)}
                                        />
                                    </div>
                                </div>

                                <div className="mb-3">
                                    <label
                                        className="small mb-1"
                                        htmlFor="inputBio"
                                    >
                                        About me
                                    </label>
                                    <input
                                        className="form-control"
                                        id="inputBio"
                                        type="text"
                                        placeholder="Enter your Bio"
                                        value={bio}
                                        onChange = {(event) => setBio(event.target.value)}
                                    />
                                </div>

                                <div className="row text-center">
                                    <div className="container mb-1">
                                        <Link to="/travelAdvisor/profile/myprofile"
                                              className="btn btn-primary rounded-pill"
                                              role="button"
                                              onClick={saveChangeHandler}>Save</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

        </div>
        </div>

    );
}

export default EditProfile;
