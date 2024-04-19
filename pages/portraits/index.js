import React, { useState } from "react";
import PhotoAlbum from "react-photo-album";
import photos from "./photos";
import banner from "../banner";

export default function index() {
  return (
    <>
      {banner()}
      <PhotoAlbum layout="columns" photos={photos} />
    </>
  );
}
