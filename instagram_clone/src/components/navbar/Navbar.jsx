import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import mainLogoDark from "../../assets/nav_icons/insta_dark.png";
import SearchBar from "./SearchBar";
import NavIcon from "./NavIcon";
import { FaInstagram } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import { LiaFacebookMessenger } from "react-icons/lia";
import { CiSquarePlus } from "react-icons/ci";
import { IoCompassOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import ModeSwitch from "./ModeSwitch";

const Navbar = ({ userResult }) => {
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <header>
      <nav className="navbar">
        <div className="logo-box" onClick={() => navigate("/")}>
          {" "}
          {/* Navigate to home */}
          <img src={mainLogoDark} alt="Main Logo" />
          <FaInstagram className="main-logo-small" />
        </div>
        <div className="navigators">
          <SearchBar />
          <div className="nav-links">
            <NavIcon Icon={GoHomeFill} />
            <NavIcon Icon={LiaFacebookMessenger} />
            <NavIcon Icon={CiSquarePlus} />
            <NavIcon Icon={IoCompassOutline} />
            <NavIcon Icon={IoMdHeartEmpty} />
            <img src={userResult.data.profile_pic_url} id="user-image" alt="User Nav Image" />
          </div>
        </div>
      </nav>
      <ModeSwitch />
    </header>
  );
};

export default Navbar;
