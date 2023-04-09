import React from "react";
import FollowingItems from "./following-items.js";
import following from "../data/followings.json";

const followingList = () => {
        return (
            <div className="d-flex justify-content-center row">
                <div className="col-md-6">
                    {following.map(following =>
                        <FollowingItems key={following._id} follow={following}/>)
                    }
                </div>
            </div>
        );

}

export default followingList;