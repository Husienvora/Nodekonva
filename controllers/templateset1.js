const { fontMachine } = require("./fontMachine");
const { registerFont, createCanvas, loadImage } = require("canvas");
const page1 = async (req, res) => {
  const { fontFamily, Variant, textin1, textin2, link1, link2, link3, color } =
    req.body;

  await fontMachine(fontFamily, Variant);
  context.fillStyle = "#fff";
  context.fillRect(0, 0, width, height);
  context.font = "40px Monserrat";
  context.textAlign = "center";
  context.textBaseline = "top";
  context.fillStyle = color;
  const text = textin1;
  const textWidth = context.measureText(text).width;
  context.fillRect(0, 0, 1200, 250);
  context.fillStyle = "#fff";
  context.fillText(text, 600, 80);
  context.font = "20px Montserrat-100";
  const text1 = textin2;
  context.fillStyle = "#fff";
  context.fillText(text1, 600, 130);
  loadImage(link1).then((image) => {
    context.drawImage(image, 490, 330, 220, 220);

    const buffer = canvas.toBuffer("image/png");
    fs.writeFileSync("./output.png", buffer);
  });
  loadImage(link2).then((image) => {
    context.drawImage(image, 120, 330, 220, 220);

    const buffer = canvas.toBuffer("image/png");
    fs.writeFileSync("./output.png", buffer);
  });
  loadImage(link3).then((image) => {
    context.drawImage(image, 840, 330, 220, 220);

    const buffer = canvas.toBuffer("image/png");
    fs.writeFileSync("./output.png", buffer);
  });
  res.send("Done");
};
module.exports = {
  page1,
};
