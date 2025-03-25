import React, { use, useState } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { carPhotos } from "../../src/components/photos/photos";
import banner from "../../src/components/banner";
import footer from "../../src/components/footer";
import NextJsImage from "../../src/components/photoLoader";

export default function index() {
  const [index, setIndex] = useState(-1);

  return (
    <>
      {banner()}
      <PhotoAlbum
        layout="rows"
        photos={carPhotos}
        spacing={12}
        targetRowHeight={350}
        renderPhoto={NextJsImage}
        onClick={({ index }) => setIndex(index)}
      />
      <Lightbox
        slides={carPhotos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
      />
      {footer()}
    </>
  );
}
