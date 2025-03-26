import React from "react";
// import Mlogo from "../../assets/m_logo.png";

function Numbers({ posts, followers, following, profilePic }) {
    return (
        <div className="numbers">
            <img src={profilePic} className="body-profile-pic" alt="user profile image" />
            <div className="counts">
                <h3>{posts}</h3> {/* Use the posts prop */}
                <p>Posts</p>
            </div>
            <div className="counts">
                <h3>{followers}</h3> {/* Use the followers prop */}
                <p>Followers</p>
            </div>
            <div className="counts">
                <h3>{following}</h3> {/* Use the following prop */}
                <p>Following</p>
            </div>
        </div>
    );
}

export default Numbers;
