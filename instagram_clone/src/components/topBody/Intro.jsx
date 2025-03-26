import React from "react";
import { FiUserPlus } from "react-icons/fi";

function Intro({ title, service, description, link }) {
    return (
        <div className="intro">
            <h4>{title}</h4> {/* Use the title prop */}
            <p>{service}</p> {/* Use the service prop */}
            <p>{description}</p> {/* Use the description prop */}
            <a href={link}>{link}</a> {/* Use the link prop */}
            {/* <p className="signed">
                Signed <span>by tini_send</span>
            </p> */}
            <div className="connect-user">
                <button>Follow</button>
                <button>Message</button>
                <button>
                    <FiUserPlus size={20} />
                </button>
            </div>
        </div>
    );
}

export default Intro;
