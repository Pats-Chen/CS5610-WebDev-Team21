import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const ProfileNavBar = () => {

    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];

    {
        return (
            <div>

                <section className="bg-light shadow-1">
                    <div className="container ">
                        {/* Section: Images */}
                        <section className="mb-5">
                            <div style={{width: '100%'}}>
                                <img  style={{height: '250px', width: '100%',objectFit: 'fit'}} src="/img/profile-header.png" alt=""/>
                            </div>

                            <img
                                src="https://mdbootstrap.com/img/new/avatars/18.jpg"
                                className="rounded-circle shadow-3-strong position-absolute"
                                alt=""
                                style={{ width: '168px', marginTop: '-140px', marginLeft: '550px', marginRight: '700px'}}
                            />

                            <div className="d-flex justify-content-center">

                            </div>
                        </section>
                        {/* Section: Images */}

                        {/* Section: user data */}
                        <section className="text-center border-bottom">
                            <div className="row d-flex justify-content-center">
                                <div className="col-lg-6">
                                    <h2><strong>Valerie Luna</strong></h2>

                                    <p className="text-muted">
                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                        Veritatis officia optio nihil, accusamus corrupti praesentium.
                                    </p>
                                </div >


                            </div>
                        </section>
                        {/* Section:user data */}

                        {/* Section: button */}
                        <section
                            className="list-group ">
                            {/* Section: left */}
                            <div>
                                {/*<button*/}
                                {/*    type="button"*/}
                                {/*    className="btn   text-reset px-3"*/}
                                {/*>*/}
                                {/*    <Link to="/travelAdvisor/profile/myprofile" className={`list-group-item ${active === 'myprofile' || active === '' ? 'active' : ''}`}>*/}
                                {/*        My Profile*/}
                                {/*    </Link>*/}
                                {/*</button>*/}
                                {/*<button*/}
                                {/*    type="button"*/}
                                {/*    className="btn   text-reset  px-3"*/}

                                {/*>*/}
                                {/*    <Link to="/travelAdvisor/profile/mytrips" style={{ textDecoration: 'none' }} className={`list-group-item ${active === 'mytrips' || active === '' ? 'active' : ''}`} >*/}
                                {/*        My Trips<small className="text-muted">1456</small>*/}
                                {/*    </Link>*/}
                                {/*</button>*/}

                                {/*<button*/}
                                {/*    type="button"*/}
                                {/*    className="btn  text-reset  px-3"*/}
                                {/*>*/}

                                {/*    <Link  to="/travelAdvisor/profile/myreviews"  style={{ textDecoration: 'none' }} className={`list-group-item ${active === 'myreviews' || active === '' ? 'active' : ''}`} >*/}
                                {/*        My Reviews*/}
                                {/*    </Link>*/}

                                {/*</button>*/}

                                {/*<button*/}
                                {/*    type="button"*/}
                                {/*    className="btn   text-reset  px-3"*/}
                                {/*>*/}
                                {/*    <Link  to="/travelAdvisor/profile/editprofile"  style={{ textDecoration: 'none' }} className={`list-group-item ${active === 'editprofile' || active === '' ? 'active' : ''}`} >*/}
                                {/*        Edit Profile*/}
                                {/*    </Link>*/}
                                {/*</button>*/}

                            </div>
                            {/* lef end */}

                        </section>

                    </div>
                </section>

            </div> );

    } };

export default ProfileNavBar;