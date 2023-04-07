import React from "react";

const WriteReview = () => {
    return (
        <div className="d-flex mb-3">
            <a href="">
                <img
                    src="https://mdbootstrap.com/img/new/avatars/18.jpg"
                    className="border rounded-circle mr-2"
                    alt=""
                    style={{ height: "40px" }}
                />
            </a>
            <div className="form-outline w-100">
          <textarea
              className="form-control"
              id="textAreaExample"
              rows="2"
          ></textarea>
                <label
                    className="form-label "
                    htmlFor="textAreaExample"
                >
                    Write a comment
                </label>
                <button className="btn  float-end" type="button">Post</button>
            </div>
        </div>
    );
}

export default WriteReview;