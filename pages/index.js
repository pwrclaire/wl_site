import Head from "next/head";
import Image from "next/image";
import cover from "../src/components/banner.jpg";
import style from "./style.module.css";
import { Kaushan_Script, League_Spartan } from "next/font/google";

const poppins = Kaushan_Script({
  subsets: ["latin"],
  display: "block",
  variable: "--font-poppins",
  weight: ["400"],
});

const league = League_Spartan({
  subsets: ["latin"],
  weight: ["700"],
});

export default function Home() {
  return (
    <div className={style.container}>
      <Head>
        <title>Winnie Lok Photography</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={style["header"]}>
        <span className={`${league.className} ${style["header-top"]}`}>
          WINNIE LOK
        </span>
        <br />
        <span className={`${poppins.className} ${style["header-bottom"]}`}>
          Photography
        </span>
      </div>
      <div style={style.buttonContainer}>
        <span>
          <a className={style["buttons"]} href="/portraits">
            <span>Portfolio</span>
          </a>
        </span>
      </div>
      <Image src={cover} objectFit="cover" fill={true} priority />

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
