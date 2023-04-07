import React from "react";

const ReviewItems = ({

    summary = {
        "_id": "123",
        "Name": "Valarie Luna",
       " userImage":
            "http://shorebread.com/wp-content/uploads/2013/08/purple-blue-and-orange-sunset_75664102.jpg",
       " content":
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc ut aliquam aliquam, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl.",
        "likes": "11"
         }
    }) => {


    return (
        <div>
            <div className="d-flex mb-3">
                <a href="">
                    <img
                        src={summary.userImage}
                        className="border rounded-circle mr-2"
                        alt=""
                        style={{ height: "40px" }}
                    />
                </a>
                <div>
                    <div className="bg-light rounded-lg px-3 py-1">
                        <a href="" className="text-dark mb-0 d-flex">
                            <strong>{summary.Name}</strong>
                        </a>
                        <p className="text-muted d-block">
                            <small>{summary.content}</small>
                        </p>
                    </div>
                    <a href="" className="text-muted small ml-3 mr-2 float-end">
                        <strong>Like</strong> <small>{summary.likes}</small>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ReviewItems;
