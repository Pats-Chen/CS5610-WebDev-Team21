import React from "react";
import {Link} from "react-router-dom";

const MyInfo = () => {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="profile-card text-center" style={{ border: "1px solid #ddd", borderRadius: "10px", padding: "20px" }}>

                        <h2 className="mb-3 ml-100px">Valerie Luna</h2>
                        <p className="text-muted">User ID: 12345</p>
                        <p><strong>Email:</strong> Valerie Luna@example.com</p>
                        <p><strong>Phone:</strong> +1 (123) 456-7890</p>
                        <p><strong>Website:</strong> hi@gmail.com </p>
                        <p><strong>Location:</strong> New York, USA</p>
                        <p className="text-muted">Bio</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at lacinia velit, eget efficitur mi.</p>
                        <button className="btn btn-primary" >
                            <Link to="editprofile" style={{ color: "white" }}>Edit Details</Link>
                        </button>


                    </div>
                </div>
            </div>
        </div>
    );
}



export default MyInfo;