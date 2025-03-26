import React, { useState, useEffect } from "react";
import styles from "./modeSwitch.module.css";
import { IoMoonSharp } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
import mainLogoLight from "../../assets/nav_icons/insta_light.png";
import mainLogoDark from "../../assets/nav_icons/insta_dark.png";

const ModeSwitch = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleMode = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add("light-mode");
            document.querySelector(".logo-box img").src = mainLogoDark;
        } else {
            document.body.classList.remove("light-mode");
            document.querySelector(".logo-box img").src = mainLogoLight;
        }
    }, [isDarkMode]);

    return (
        <div className={styles.mode_switch_container}>
            <p>{isDarkMode ? "Light" : "Dark"}</p>
            <button onClick={toggleMode} className={styles.mode_switch}>
                {isDarkMode ? <IoSunny /> : <IoMoonSharp />}
            </button>
        </div>
    );
};

export default ModeSwitch;
