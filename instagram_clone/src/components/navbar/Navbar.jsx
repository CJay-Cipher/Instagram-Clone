import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
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
          <a href="/">
            <img src={mainLogoDark} alt="Main Logo" />
          </a>
          <a href="/">
            <FaInstagram className="main-logo-small" />
          </a>
        </div>
        <div className="navigators">
          <SearchBar />
          <div className="nav-links">
            <a href="/">
              <NavIcon Icon={GoHomeFill} />
            </a>
            <a href="/">
              <NavIcon Icon={LiaFacebookMessenger} />
            </a>
            <a href="/">
              <NavIcon Icon={CiSquarePlus} />
            </a>
            <a href="/">
              <NavIcon Icon={IoCompassOutline} />
            </a>
            <a href="/">
              <NavIcon Icon={IoMdHeartEmpty} />
            </a>
            <img src={userResult.data.profile_pic_url} id="user-image" alt="User Nav Image" />
          </div>
        </div>
      </nav>
      <ModeSwitch />
    </header>
  );
};

export default Navbar;
