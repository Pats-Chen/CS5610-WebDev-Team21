import React from "react";


const EditProfile = (
    { userinfo = {
        "_id":"123",
        "username": "username",
        "first name": "Valerie",
        "last name": "Luna",
        "website": "www.valerieluna.com",
        "profile Image": "http://www.valerieluna.com/profile.jpg"
    }}
) => {
    return (
        <div className="container-xl px-4 mt-4">
            <hr className="mt-0 mb-4" />
            <div className="row">
                <div className="col-xl-4">
                    <div className="card mb-4 mb-xl-0">
                        <div className="card-header">Profile Picture</div>
                        <div className="card-body text-center">
                            <img
                                className="img-account-profile rounded-circle mb-2"
                                src="https://mdbootstrap.com/img/new/avatars/18.jpg"
                                alt=""
                                style={{ width: "200px" }} // set width to 200px
                            />

                            <div className="small font-italic text-muted mb-4">
                                JPG or PNG no larger than 5 MB
                            </div>

                            <button className="btn btn-primary" type="button">
                                Upload new image
                            </button>
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
                                        Username (how your name will appear to other users on the site)
                                    </label>
                                    <input
                                        className="form-control"
                                        id="inputUsername"
                                        type="text"
                                        placeholder="Enter your username"
                                        value="username"
                                    />
                                </div>

                                <div className="row gx-3 mb-3">
                                    <div className="col-md-6">
                                        <label
                                            className="small mb-1"
                                            htmlFor="inputFirstName"
                                        >
                                            First name
                                        </label>
                                        <input
                                            className="form-control"
                                            id="inputFirstName"
                                            type="text"
                                            placeholder="Enter your first name"
                                            value="Valerie"
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <label
                                            className="small mb-1"
                                            htmlFor="inputLastName"
                                        >
                                            Last name
                                        </label>
                                        <input
                                            className="form-control"
                                            id="inputLastName"
                                            type="text"
                                            placeholder="Enter your last name"
                                            value="Luna"
                                        />
                                    </div>
                                </div>

                                <div className="row gx-3 mb-3">
                                    <div className="col-md-6">
                                        <label
                                            className="small mb-1"
                                            htmlFor="inputOrgName"
                                        >
                                            Website
                                        </label>
                                        <input
                                            className="form-control"
                                            id="inputOrgName"
                                            type="text"
                                            placeholder="Enter your website"
                                            value="hi.com"
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <label
                                            className="small mb-1"
                                            htmlFor="inputLocation"
                                        >
                                            Location
                                        </label>
                                        <input
                                            className="form-control"
                                            id="inputLocation"
                                            type="text"
                                            placeholder="Enter your location"
                                            value="San Francisco, CA"
                                        />
                                    </div>
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
                                        value="luna@gmail.com"
                                    />
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
                                            value="888-888-888"/>
                                    </div>

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
                                            value="7-17-2000"/>
                                    </div>


                                </div>
                                <button className="btn btn-primary float-start" type="button">Save changes</button>
                            </form>
                    </div>
                </div>
        </div>
    </div>
    </div>

    );

}

export default EditProfile;