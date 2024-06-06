import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import cover from "../src/components/banner.jpg";
import style from "./style.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Winnie Lok Photography</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={style["header"]}>WINNIE LOK</h1>
      <div style={style.buttonContainer}>
        <span>
          <a className={style["buttons"]} href="/portraits">
            <span>PORTRAITS</span>
          </a>
        </span>
        <span>
          <a className={style["buttons"]} href="/automotive">
            <span>AUTOMOTIVE</span>
          </a>
        </span>
      </div>
      <Image src={cover} objectFit="cover" fill={true} />

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
            Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
