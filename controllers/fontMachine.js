const axios = require("axios");
const { DownloaderHelper } = require("node-downloader-helper");
const Downloader = require("nodejs-file-downloader");
const fs = require("fs");
const { request } = require("http");
const { registerFont, createCanvas, loadImage } = require("canvas");

const fontMachine = async (fontFamily, Variant) => {
  const data = await axios
    .get(
      "https://webfonts.googleapis.com/v1/webfonts?sort=STYLE&key=AIzaSyAAiOkCBmUBGJPQvjK1RmQVnhNMdgro2nU"
    )
    .then((res) => {
      return res.data.items;
    });
  dicturl = {};

  for (i = 0; i <= data.length - 1; i++) {
    for (j = 0; j <= fontFamily.length - 1; j++) {
      if (data[i].family == fontFamily[j]) {
        dicturl[data[i].family] = {};
        for (k = 0; k <= Variant.length - 1; k++) {
          dicturl[data[i].family][Variant[k]] = data[i].files[Variant[k]];
          if (!fs.existsSync(`./fonts/${data[i].family}-${Variant[k]}.ttf`)) {
            const downloader = new Downloader({
              url: data[i].files[Variant[k]],
              directory: "./fonts",
              onBeforeSave: (deduceName) => {
                return `${data[i].family}-${Variant[k]}.ttf`;
              },
            });

            await downloader.download();
            registerFont(`./fonts/${data[i].family}-${Variant[k]}.ttf`, {
              family: `${data[i].family}-${Variant[k]}`,
            });
          } else {
            registerFont(`./fonts/${data[i].family}-${Variant[k]}.ttf`, {
              family: `${data[i].family}-${Variant[k]}`,
            });
            console.log("Already there");
          }
        }
      }
    }
  }

  console.log(dicturl);
  return data;
};
module.exports = {
  fontMachine,
};
