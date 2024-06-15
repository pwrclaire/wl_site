const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

const importAll = (r) => {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
};

const loadImages = (type) => {
  let images;
  if (type === "cars") {
    images = importAll(require.context("./cars", false, /\.(png|jpe?g|svg)$/));
  } else if (type === "portraits") {
    images = importAll(
      require.context("./portraits", false, /\.(png|jpe?g|svg)$/)
    );
  } else {
    throw new Error('Invalid type. Please use "cars" or "portraits".');
  }

  let photoArr = [];
  for (const [key, value] of Object.entries(images)) {
    const order = key.replace(/\.(png|jpe?g|svg)$/, "");
    value.order = Number(order);
    photoArr.push(value);
  }

  photoArr.sort((a, b) => a.order - b.order);

  return photoArr.map(({ default: photo }) => ({
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
};

const carPhotos = loadImages("cars");
const portraitPhotos = loadImages("portraits");

export { carPhotos, portraitPhotos, loadImages };
