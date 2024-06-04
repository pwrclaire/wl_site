import Head from "next/head";
import Image from "next/image";
import { CacheProvider } from "@emotion/react";
import { cache } from "@emotion/css";
import styles from "../styles/Home.module.css";
import cover from "../src/components/banner.jpg";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Winnie Lok Photography</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 style={style.header}>WINNIE LOK</h1>
      <div style={style.buttonContainer}>
        <span>
          <a style={style.buttons} href="/portraits">
            PORTRAITS
          </a>
        </span>
        <span>
          <a style={style.buttons} href="/automotive">
            AUTOMOTIVE
          </a>
        </span>
      </div>
      <Image src={cover} objectFit="cover" fill={true} />

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}

const style = {
  header: {
    color: "white",
    position: "relative",
    zIndex: 9999,
    top: "200px",
    fontSize: "5rem",
    top: "-188px",
    textShadow: "0 0 8px #000",
  },
  buttons: {
    position: "relative",
    zIndex: 10999,
    color: "white",
    textAlign: "center",
    textDecoration: "none",
    border: "2px white solid",
    padding: "5px",
    margin: "10px",
    top: "88px",
    fontSize: "1.5rem",
    textShadow: "0 0 8px #000",
  },
};
