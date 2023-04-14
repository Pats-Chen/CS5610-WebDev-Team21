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
                    <img src="/img/landscape3.png" className="bd-placeholder-img" width="100%" height="100%"/>
                    <div className="container">
                        <div className="carousel-caption text-start">
                            <h1>Login/ My profile.</h1>
                            <p>login and edit my profile from here.</p>
                            <p><a className="btn btn-lg btn-primary" href="#">Sign up today</a></p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="/img/landscape1.png" className="bd-placeholder-img" width="100%" height="100%"/>

                    <div className="container">
                        <div className="carousel-caption">
                            <h1>Creat a new plan.</h1>
                            <p>search your distinction, build your trip .</p>
                            <p><a className="btn btn-lg btn-primary" href="#">Start to plan</a></p>
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="/img/landscape2.png" className="bd-placeholder-img" width="100%" height="100%"/>

                    <div className="container">
                        <div className="carousel-caption text-end">
                            <h1>Explore more plans.</h1>
                            <p>view travel plans created by others and join their jurney</p>
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