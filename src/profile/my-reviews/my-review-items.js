import React from "react";

const MyReviewItems = ({
                           userinfo = {
                               "_id":"123",
                               "date": "07/24/2018",
                               "place": "New York",
                               "placeImage": "http://shorebread.com/wp-content/uploads/2013/08/purple-blue-and-orange-sunset_75664102.jpg",
                           } }
) => {
    return (
        <div className="col-lg-4 col-sm-6">
            <section className="mx-auto my-5" style={{ maxWidth: "20rem" }}>
                <div className="card">
                    <div className="card-body d-flex flex-row">
                        <div>
                            <h5 className="card-title font-weight-bold mb-2">
                                {userinfo.place}
                            </h5>
                            <p className="card-text">
                                <i className="far fa-clock pe-2"></i>
                                {userinfo.date}
                            </p>
                        </div>
                    </div>
                    <div
                        className="bg-image hover-overlay ripple rounded-0"
                        data-mdb-ripple-color="light"
                    >
                        <img
                            className="img-fluid"
                            src={userinfo.placeImage}
                            alt="Card image cap"
                        />
                        <a href="#!">
                            <div
                                className="mask"
                                style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                            ></div>
                        </a>
                    </div>
                    <div className="card-body">
                        <div className="d-flex justify-content-between">
                            <a
                                className="btn btn-link link-danger p-md-1 my-1"
                                role="button"
                                aria-expanded="false"
                                aria-controls="collapseContent"
                            >
                                See my comment
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default MyReviewItems;