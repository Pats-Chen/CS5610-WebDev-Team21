import React from "react";

function HomeCarousel () {
    return (
        <div id="myCarousel" className="carousel slide mb-0" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                        className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                        aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                        aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src="/img/boston-night-carousel.jpg" className="bd-placeholder-img" width="100%" height="100%"/>
                    <div className="container">
                        <div className="carousel-caption text-start">
                            <h1>SIGN UP TODAY</h1>
                            <p>start preparing for your future travel</p>
                            <p><a className="btn btn-lg btn-primary" href="#">Signup</a></p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="/img/seattle-night-carousel.jpg" className="bd-placeholder-img" width="100%" height="100%"/>

                    <div className="container">
                        <div className="carousel-caption">
                            <h1>CREATE YOUR OWN PLAN</h1>
                            <p>search your distinction and build your trip</p>
                            <p><a className="btn btn-lg btn-primary" href="#">Create</a></p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="/img/sanfrancisco-night-carousel.jpg" className="bd-placeholder-img" width="100%" height="100%"/>

                    <div className="container">
                        <div className="carousel-caption text-end">
                            <h1>FOLLOW NEW FRIENDS</h1>
                            <p>build relationship with others and join their journey</p>
                            <p><a className="btn btn-lg btn-primary" href="#">Browse plans</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel"
                    data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#myCarousel"
                    data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default HomeCarousel