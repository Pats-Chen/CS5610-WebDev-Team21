import React from "react";
import "./homepage.css";
import homeCarousel from "./home-carousel";
import HomeCarousel from "./home-carousel";
function Home(){
    return(
        <main>
            <style>
                {`
                    .bd-placeholder-img {
                    font-size: 1.125rem;
                    text-anchor: middle;
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    user-select: none;
                }
    
                    @media (min-width: 768px) {
                    .bd-placeholder-img-lg {
                    font-size: 3.5rem;
                }
                }
    
                    .b-example-divider {
                    height: 3rem;
                    background-color: rgba(0, 0, 0, .1);
                    border: solid rgba(0, 0, 0, .15);
                    border-width: 1px 0;
                    box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
                }
    
                    .b-example-vr {
                    flex-shrink: 0;
                    width: 1.5rem;
                    height: 100vh;
                }
    
                    .bi {
                    vertical-align: -.125em;
                    fill: currentColor;
                }
    
                    .nav-scroller {
                    position: relative;
                    z-index: 2;
                    height: 2.75rem;
                    overflow-y: hidden;
                }
    
                    .nav-scroller .nav {
                    display: flex;
                    flex-wrap: nowrap;
                    padding-bottom: 1rem;
                    margin-top: -1px;
                    overflow-x: auto;
                    text-align: center;
                    white-space: nowrap;
                    -webkit-overflow-scrolling: touch;
                }
                `}
            </style>
            <header>
               Place for nav bar
            </header>

            <HomeCarousel></HomeCarousel>
            <div className="row  featurette container-fluid bg-opacity-50" >
                <div className="col-md-9" >
                    <h2 className="featurette-heading fw-normal lh-1">Plan a Trip
                        <span className="text-muted"> Can't be any easier.</span></h2>
                    <p className="lead">Plan a trip to anywhere you want to go &
                        <span className="text-muted">join a fantaiscic trip created by others.</span></p>
                </div>
            </div>

            <div className="container marketing">
            <div className="row">
                <div className="col-lg-4">
                    <svg className="bd-placeholder-img rounded-circle" width="140" height="140"
                         xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140"
                         preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#777"/>
                        <text x="50%" y="50%" fill="#777" dy=".3em">140x140</text>
                    </svg>

                    <h2 className="fw-normal">Heading</h2>
                    <p>Some representative placeholder content for the three columns of text below the carousel. This is the
                        first column.</p>
                    <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
                </div>

                <div className="col-lg-4">
                    <svg className="bd-placeholder-img rounded-circle" width="140" height="140"
                         xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140"
                         preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#777"/>
                        <text x="50%" y="50%" fill="#777" dy=".3em">140x140</text>
                    </svg>

                    <h2 className="fw-normal">Heading</h2>
                    <p>Another exciting bit of representative placeholder content. This time, we've moved on to the second
                        column.</p>
                    <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
                </div>

                <div className="col-lg-4">
                    <svg className="bd-placeholder-img rounded-circle" width="140" height="140"
                         xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 140x140"
                         preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#777"/>
                        <text x="50%" y="50%" fill="#777" dy=".3em">140x140</text>
                    </svg>

                    <h2 className="fw-normal">Heading</h2>
                    <p>And lastly this, the third column of representative placeholder content.</p>
                    <p><a className="btn btn-secondary" href="#">View details &raquo;</a></p>
                </div>
            </div>
        </div>


            <footer className="container">
            <p className="float-end"><a href="#">Back to top</a></p>
            <p>&copy; Team21. CS5610. NEU. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
        </footer>


        </main>
    )

}

export default Home