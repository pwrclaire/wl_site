import React from "react";
import Image from "next/image";
import ins from "./ins.png";

export default function footer() {
  return (
    <div style={styles.footer}>
      <a href="https://www.instagram.com/wlokphotography/">
        <Image id="logo" src={ins} height={30} width={30}></Image>
      </a>
    </div>
  );
}

const styles = {
  footer: {
    textAlign: "center",
    padding: "20px",
  },
};
