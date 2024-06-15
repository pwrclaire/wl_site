import styles from "./general.module.css";

const Navbar = () => {
  const Buttons = () => {
    return (
      <div className={styles.navbar}>
        {/* <a href="/" className={styles["a-button"]}>
          <span>HOME</span>
        </a> */}
        <a href="/portraits" className={styles["a-button"]}>
          <span>PORTRAIT</span>
        </a>
        <a href="/automotive" className={styles["a-button"]}>
          <span>AUTOMOTIVE</span>
        </a>
        <a href="/contact" className={styles["a-button"]}>
          CONTACT
        </a>
      </div>
    );
  };

  return <Buttons />;
};

export default Navbar;
