import React, { useState } from "react";
import PhotoAlbum from "react-photo-album";
import photos from "./photos";

export default function index() {
  return (
    <>
      <h2>Some title thingy</h2>
      <PhotoAlbum layout="rows" photos={photos} />
    </>
  );
}
