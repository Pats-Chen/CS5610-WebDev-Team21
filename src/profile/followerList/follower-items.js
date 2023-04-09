import React from "react";

const FollowerItems = ({ follower }) => {
    return (
        <div className="d-flex flex-row justify-content-between align-items-center mt-2">
            <div className="d-flex flex-row align-items-center">
                <img
                    className="rounded-circle"
                    src={follower.profileImage}
                    alt={follower.Name}
                    width="55"
                />
                <div className="d-flex flex-column align-items-start" style={{ paddingLeft: '20px' }}>
                    <span style={{ fontWeight: 'bold' }}>{follower.Name}</span>
                    <span>{follower.followers} Followers</span>
                </div>
            </div>
            <div className="d-flex flex-row align-items-center mt-2">
                <button className="btn btn-outline-primary btn-sm" type="button">
                    Follow
                </button>
            </div>
        </div>
    );
};

export default FollowerItems;