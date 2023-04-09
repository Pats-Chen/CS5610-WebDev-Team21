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

          <section className="bg-white shadow-1 ">
              <div className="container">
                  {/* Section: Images */}
                  <section className="mb-5">
                      <div style={{width: '100%'}}>
                          <img  style={{height: '250px', width: '100%',objectFit: 'fit'}} src="/img/landscape3.png" alt=""/>
                      </div>

                      <img
                          src="https://mdbootstrap.com/img/new/avatars/18.jpg"
                          className="rounded-circle shadow-3-strong position-absolute"
                          alt=""
                          style={{ width: '168px', marginTop: '-140px',marginLeft: '-80px' }}
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

                              <h7 className ="mb-2">
                                  <span> <strong>  <Link  to="followingList " style={{ display: 'inline' , textDecoration:"none", color: 'black' }}  >
                                 1,200
                              </Link> </strong> </span>Following

                                  <span className="ms-4"> <strong>  <Link  to="followerList " style={{ display: 'inline' , textDecoration:"none", color: 'black' }}  >
                                 1,900
                              </Link> </strong> </span>Followers


                              </h7>

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
                          <button
                              type="button"
                              className="btn   text-reset px-3"
                          >
                              <Link  to="profile"   className={`list-group-item ${active === 'profile' || active === '' ? 'active' : ''}`} >
                                 My Info
                              </Link>
                          </button>
                          <button
                              type="button"
                              className="btn   text-reset  px-3"

                          >
                              <Link  to="mytrips"  style={{ textDecoration: 'none' }} className={`list-group-item ${active === 'mytrips' || active === '' ? 'active' : ''}`} >
                                  My Trips<small className="text-muted">1456</small>
                              </Link>
                          </button>

                          <button
                              type="button"
                              className="btn  text-reset  px-3"
                          >

                              <Link  to="myreviews"  style={{ textDecoration: 'none' }} className={`list-group-item ${active === 'myreviews' || active === '' ? 'active' : ''}`} >
                                  My Reviews
                              </Link>

                          </button>

                          <button
                              type="button"
                              className="btn   text-reset  px-3"
                          >
                              <Link  to="/googleMapTest"  style={{ textDecoration: 'none' }} className={`list-group-item ${active === 'travelmap' || active === '' ? 'active' : ''}`} >
                                 Travel Map
                              </Link>
                          </button>


                      </div>
                      {/* lef end */}


                  </section>

              </div>
          </section>







      </div> );




} };

export default ProfileNavBar;