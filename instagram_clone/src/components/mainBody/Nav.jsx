import styles from "./style.module.css";
import { MdOutlineGridOn } from "react-icons/md";
import { GrMultimedia } from "react-icons/gr";
import { LuCircleUserRound } from "react-icons/lu";

const Nav = () => {
    return (
        <nav>
            <div className={`${styles.nav_content} ${styles.active}`}>
                <MdOutlineGridOn className={styles.nav_content_icon} />
                <h4>PUBLICATIONS</h4>
            </div>
            <div className={styles.nav_content}>
                <GrMultimedia className={styles.nav_content_icon} />
                <h4>REELS</h4>
            </div>
            <div className={styles.nav_content}>
                <LuCircleUserRound className={styles.nav_content_icon} />
                <h4>MARKS</h4>
            </div>
        </nav>
    );
};

export default Nav;
