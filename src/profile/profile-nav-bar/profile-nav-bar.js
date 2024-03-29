import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {getUserProfile} from "../../services/user-service";

const ProfileNavBar = () => {
    const { userId } = useParams()
    const {currentUser} = useSelector((state) => state.users)
    const [displayedUser, setDisplayedUser] = useState(currentUser);
    useEffect(() => {
        async function fetchData() {
            if (userId) {
                const userProfile = await getUserProfile(userId);
                setDisplayedUser(userProfile);
            }
        }
        fetchData();
    }, []);


    useEffect(() => {
        async function fetchData() {
            if (userId) {
                const userProfile = await getUserProfile(userId);
                setDisplayedUser(userProfile);
            }
        }

        fetchData();
    }, [userId]);

    useEffect(() => {
        setDisplayedUser(currentUser);
    }, [currentUser]);

    return (
        <>
            {displayedUser && (
            <div>
                <section className="bg-light shadow-1">
                    <div className="container p-0">
                        {/* Section: Images */}
                        <section className="mb-5">
                            <div style={{width: '100%'}}>
                                <img style={{height: '250px', width: '100%',objectFit: 'fit'}}
                                     src="/img/profile-header.png" alt="/img/profile-header.png"/>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'center' }}  >
                                <img className="rounded-circle shadow-3-strong position-absolute bg-white"
                                     src={`${process.env.PUBLIC_URL}/img/${displayedUser.profileImage}`}
                                     alt={`${process.env.PUBLIC_URL}/img/${displayedUser.profileImage}`}
                                     style={{height: '150px', width: '150px', marginTop: '-110px', marginLeft: '700px', marginRight: '700px'}}
                                />
                            </div>
                            <div className="d-flex justify-content-center"></div>
                        </section>
                        {/* Section: Images */}

                        {/* Section: user data */}
                        <section className="text-center">
                            <div className="row d-flex justify-content-center">
                                <div className="col-lg-6">
                                    <h2 className="text-muted">What's new, <strong>{displayedUser.username}</strong>?</h2>
                                </div>
                            </div>
                        </section>
                        {/* Section:user data */}
                    </div>
                </section>
            </div>
            )}
        </>
    );
};
export default ProfileNavBar;