import React from "react";
import followers from "../data/followers.json";
import FollowerItems from "./follower-items.js";

const FollowerList = () => {
        return (
            <div className="d-flex justify-content-center row">
                <div className="col-md-6">
                    {followers.map(follower =>
                        < FollowerItems key={follower._id} follower={follower}/>)
                    }
                </div>
            </div>
        );

}

export default FollowerList;