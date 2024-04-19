const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const importAll = (r) => {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
};

const images = importAll(
  require.context("./images", false, /\.(png|jpe?g|svg)$/)
);

const photoArr = [];

for (const [_, value] of Object.entries(images)) {
  photoArr.push(value);
}

const photos = photoArr.map(({ default: photo }) => ({
  src: photo.src,
  width: photo.width,
  height: photo.height,
  srcSet: breakpoints.map((breakpoint) => {
    const height = Math.round((photo.height / photo.width) * breakpoint);
    return {
      src: photo.src,
      width: breakpoint,
      height,
    };
  }),
}));

export default photos;