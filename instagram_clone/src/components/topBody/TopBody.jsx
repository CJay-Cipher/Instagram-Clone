import React from "react";
import Information from "./Information.jsx";
import Numbers from "./Numbers.jsx";
import Intro from "./Intro.jsx";

function TopBody({ userResult }) {
    return (
        <section className="top-body">
            <img src={userResult.data.profile_pic_url} className="body-profile-pic" alt="user profile image" />
            <div className="information">
                <Information userName={userResult.data.username} />
                <Numbers
                    posts={userResult.data.media_count}
                    followers={userResult.data.follower_count}
                    following={userResult.data.following_count}
                    profilePic={userResult.data.profile_pic_url}
                />
                <Intro
                    title={userResult.data.full_name}
                    service={userResult.data.category}
                    description={userResult.data.biography}
                    link={userResult.data.bio_links.length > 0 ? userResult.data.bio_links[0].url : ""}
                />
            </div>
        </section>
    );
}

export default TopBody;
