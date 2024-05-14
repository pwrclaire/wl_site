import React from "react";
import Image from "next/image";
import logo from "./logo.jpg";
import navbar from "./navBar";

export default function banner() {
  return (
    <div style={styles.container}>
      <Image id="logo" src={logo}></Image>
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
