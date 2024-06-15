import React from "react";
import Image from "next/image";
import logo from "./winnie.png";
import navbar from "./navBar";

export default function banner() {
  return (
    <duv>
      <div style={styles.container}>
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

const styles = {
  container: {
    textAlign: "center",
    position: "relative",
    width: "100%",
    height: "300px",
  },
};
