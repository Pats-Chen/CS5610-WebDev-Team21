import React from "react";

const FollowingItem = ({ follow }) => {
    return (
        <div className="d-flex flex-row justify-content-between align-items-center mt-2">
            <div className="d-flex flex-row align-items-center">
                <img
                    className="rounded-circle"
                    src={follow.profileImage}
                    alt={follow.Name}
                    width="55"
                />
                <div className="d-flex flex-column align-items-start" style={{ paddingLeft: '20px' }}>
                    <span style={{ fontWeight: 'bold' }}>{follow.Name}</span>
                    <span>{follow.following} Followers</span>
                </div>
            </div>
            <div className="d-flex flex-row align-items-center mt-2">
                <button className="btn btn-primary btn-sm" type="button">
                    Following
                </button>
            </div>
        </div>
    );
};

export default FollowingItem;