function importAll(r) {
  return r.keys().map(r);
}

const ImagesContent = importAll(
  require.context("./", false, /\.(png|jpe?g|svg)$/)
);
const data = {
  images: [
    {
      index: 0,
      picture: ImagesContent[0],
      value: "cat"
    },
    {
      index: 1,
      picture: ImagesContent[14],
      value: "dog"
    },
    {
      index: 2,
      picture: ImagesContent[1],
      value: "cat"
    },
    {
      index: 3,
      picture: ImagesContent[2],
      value: "cat"
    },
    {
      index: 4,
      picture: ImagesContent[9],
      value: "dog"
    },
    {
      index: 5,
      picture: ImagesContent[8],
      value: "dog"
    },
    {
      index: 6,
      picture: ImagesContent[5],
      value: "cat"
    },
    {
      index: 7,
      picture: ImagesContent[10],
      value: "dog"
    },
    {
      index: 8,
      picture: ImagesContent[3],
      value: "cat"
    },
    {
      index: 9,
      picture: ImagesContent[13],
      value: "dog"
    },
    {
      index: 10,
      picture: ImagesContent[4],
      value: "cat"
    },
    {
      index: 11,
      picture: ImagesContent[12],
      value: "dog"
    },
    {
      index: 12,
      picture: ImagesContent[6],
      value: "cat"
    },
    {
      index: 13,
      picture: ImagesContent[7],
      value: "cat"
    },
    {
      index: 14,
      picture: ImagesContent[11],
      value: "dog"
    }
  ]
};
export default data;
