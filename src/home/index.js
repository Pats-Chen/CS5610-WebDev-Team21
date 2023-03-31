import React from "react";
import {Link} from "react-router-dom";

function Home(){
    return(
        <div>
            <p>Here should be the home component</p>
            <div className="container">
                <div className="col-11 position-relative">
                    <input placeholder="Search The city you want to visit"
                           className="form-control rounded-pill ps-5"/>
                </div>
                <br/>
                <br/>
            </div>
            <div className="container">
                <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4">
                    {/* Render 12 clickable pictures */}
                    <div className="col mb-4">
                        <Link to="/picture-1"><img src="/img/SanFrancisco.jpeg" width="400px" height="400px" alt="Picture 1" className="img-thumbnail" /></Link>
                    </div>
                    <div className="col mb-4">
                        <Link to="/picture-2"><img src="picture-2.jpg" alt="Picture 2" className="img-thumbnail" /></Link>
                    </div>
                    <div className="col mb-4">
                        <Link to="/picture-2"><img src="picture-2.jpg" alt="Picture 2" className="img-thumbnail" /></Link>
                    </div>
                    <div className="col mb-4">
                        <Link to="/picture-2"><img src="picture-2.jpg" alt="Picture 2" className="img-thumbnail" /></Link>
                    </div>
                    <div className="col mb-4">
                        <Link to="/picture-2"><img src="picture-2.jpg" alt="Picture 2" className="img-thumbnail" /></Link>
                    </div>
                    <div className="col mb-4">
                        <Link to="/picture-2"><img src="picture-2.jpg" alt="Picture 2" className="img-thumbnail" /></Link>
                    </div>
                    <div className="col mb-4">
                        <Link to="/picture-2"><img src="picture-2.jpg" alt="Picture 2" className="img-thumbnail" /></Link>
                    </div>
                    <div className="col mb-4">
                        <Link to="/picture-2"><img src="picture-2.jpg" alt="Picture 2" className="img-thumbnail" /></Link>
                    </div>
                    {/* Add more pictures here */}
                </div>
            </div>
        </div>
    );
}

export default Home