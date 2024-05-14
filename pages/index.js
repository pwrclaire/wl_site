import Head from "next/head";
import { CacheProvider } from "@emotion/react";
import { cache } from "@emotion/css";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Winnie Lok Photography</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        Winnie Lok Photography
        <a href="/portraits">Portraits</a>
        <a href="/automotive">automotive</a>
      </main>

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
