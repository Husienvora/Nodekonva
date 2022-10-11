const { fontMachine } = require("./fontMachine");
const { registerFont, createCanvas, loadImage } = require("canvas");
const fs = require("fs");
const page1 = async (req, res) => {
  const { fontFamily, textin1, textin2, link1, link2, link3, color } = req.body;

  await fontMachine(fontFamily);
  const width = 1200;
  const height = 630;
  const canvas = createCanvas(width, height);
  const context = canvas.getContext("2d");
  context.fillStyle = "#fff";
  context.fillRect(0, 0, width, height);
  context.font = `48px ${fontFamily}`;
  context.textAlign = "center";
  context.textBaseline = "top";
  context.fillStyle = "black";
  const text = "Medium";
  context.fillText(text, 600, 80);

  context.font = `48px ${fontFamily}-700`;
  context.textAlign = "center";
  context.textBaseline = "top";
  context.fillStyle = "black";
  const text2 = "Bold";

  const textWidth = context.measureText(text).width;

  context.fillText(text2, 600, 200);
  const buffer = canvas.toBuffer("image/png");

  fs.writeFileSync("./output.png", buffer);
  // loadImage(link3).then((image) => {
  //   context.drawImage(image, 840, 330, 220, 220);

  //   const buffer = canvas.toBuffer("image/png");
  //   fs.writeFileSync("./output.png", buffer);
  // });
  // res.send("Done");
};
module.exports = {
  page1,
};
