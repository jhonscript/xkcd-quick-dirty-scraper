import { get } from "https";
import sizeOf from "image-size";

export const getImageSize = ({ imgUrl }) => {
  return new Promise((resolve) => {
    get(imgUrl, function (response) {
      const chunks = [];
      response
        .on("data", (chunk) => {
          chunks.push(chunk);
        })
        .on("end", () => {
          const buffer = Buffer.concat(chunks);
          const { height, width } = sizeOf(buffer);
          resolve({ height, width });
        });
    });
  });
};
