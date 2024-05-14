import React, { useState } from "react";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import photos from "../../src/components/automotive/photos";
import banner from "../../src/components/banner";

export default function index() {
  const [index, setIndex] = useState(-1);

  return (
    <>
      {banner()}
      <PhotoAlbum
        layout="rows"
        photos={photos}
        spacing={12}
        targetRowHeight={350}
        onClick={({ index }) => setIndex(index)}
      />
      <Lightbox
        slides={photos}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
      />
    </>
  );
}
