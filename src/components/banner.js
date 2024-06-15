import React from "react";
import Image from "next/image";
import logo from "./winnie.png";
import navbar from "./navBar";
import style from "./general.module.css";

export default function banner() {
  return (
    <duv>
      <div className={style["container"]}>
        <Image
          id="logo"
          src={logo}
          layout="fill"
          objectFit="contain"
          priority
        ></Image>
      </div>
      <div>{navbar()}</div>
      <br />
    </duv>
  );
}
