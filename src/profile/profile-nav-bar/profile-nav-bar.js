import React from "react";

const ProfileNavBar = () => {

    return (
        <div>
            <section className="bg-light shadow-1">
                <div className="container">
                    {/* Section: Images */}
                    <section className="mb-5">
                        <div style={{width: '100%'}}>
                            <img style={{height: '250px', width: '100%',objectFit: 'fit'}}
                                 src="/img/profile-header.png" alt="/img/profile-header.png"/>
                        </div>

                        <div>
                            <img className="rounded-circle shadow-3-strong position-absolute bg-white"
                                 src={`${process.env.PUBLIC_URL}/img/husky-dog-1358170.svg`}
                                 alt={`${process.env.PUBLIC_URL}/img/husky-dog-1358170.svg`}
                                 style={{height: '150px', width: '150px', marginTop: '-110px', marginLeft: '550px', marginRight: '700px'}}
                            />
                        </div>
                        <div className="d-flex justify-content-center"></div>
                    </section>
                    {/* Section: Images */}

                    {/* Section: user data */}
                    <section className="text-center">
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-6">
                                <h2><strong>Valerie Luna</strong></h2>
                            </div>
                        </div>
                    </section>
                    {/* Section:user data */}
                </div>
            </section>
        </div>
    );
};
export default ProfileNavBar;