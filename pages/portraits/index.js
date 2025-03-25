import React, { useState } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { portraitPhotos } from "../../src/components/photos/photos";
import banner from "../../src/components/banner";
import footer from "../../src/components/footer";

export default function index() {
  const [index, setIndex] = useState(-1);

  return (
    <>
      {banner()}
      <PhotoAlbum
        layout="rows"
        photos={portraitPhotos}
        spacing={12}
        targetRowHeight={350}
        onClick={({ index }) => setIndex(index)}
      />
      <Lightbox
        slides={portraitPhotos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
      />
      {footer()}
    </>
  );
}
