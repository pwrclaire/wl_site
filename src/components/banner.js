import React from "react";
import Image from "next/image";
import logo from "./winnie.png";
import navbar from "./navBar";

export default function banner() {
  return (
    <div style={styles.container}>
      <Image id="logo" src={logo} height={300}></Image>
      {navbar()}
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    padding: "20px",
  },
};
