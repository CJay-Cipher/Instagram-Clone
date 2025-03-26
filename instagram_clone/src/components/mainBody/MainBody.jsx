import styles from "./style.module.css";
import Nav from "./Nav";

const MainBody = ({ userPost }) => {
    if (!userPost.data || !Array.isArray(userPost.data.items)) {
        return <p>No posts available.</p>;
    }

    return (
        <section className={styles.main_body}>
            <Nav />
            <ul className={styles.post_grid}>
                {userPost.data.items.map((item, index) => (
                    <li key={index}>
                        <img src={item.thumbnail_url} alt={`post ${index}`} />
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default MainBody;
