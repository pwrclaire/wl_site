import { useRouter } from "next/router";
import styles from "./general.module.css";

const Navbar = () => {
  const Buttons = () => {
    return (
      <div className={styles.navbar}>
        <a href="/portraits" className={styles["a-button"]}>
          PORTRAIT
        </a>
        <a href="/automotive" className={styles["a-button"]}>
          AUTOMOTIVE
        </a>
        {/* <a href="/contact" className={styles["a-button"]}>
          CONTACT
        </a> */}
      </div>
    );
  };

  return <Buttons />;
};

export default Navbar;
