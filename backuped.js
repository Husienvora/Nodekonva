const width = 1200;
const height = 630;
const canvas = createCanvas(width, height);
const context = canvas.getContext("2d");
context.fillStyle = "#fff";
context.fillRect(0, 0, width, height);
// context.rect(246, 399, -245, -399);
// context.rect(247, 0, 353, 190);

// context.rect(600, 400, -354, -210);
context.fillStyle = "#EB4646";
context.fillRect(0, 0, 650, 630);
context.fillStyle = "orange";
context.fillRect(650, 0, 550, 315);
context.fillStyle = "green";
context.fillRect(650, 315, 550, 315);
context.font = "80px  Monserrat-Semibold";
context.fillStyle = "#fff";

wrapText(context, "Montserrat", 50, 150, 50, 80);
context.font = "15px  Monserrat-Semibold";
context.fillStyle = "#fff";
wrapText(
  context,
  "Uniform and minimal with perfect geometric ratios. Perfect for architecture focused business",
  50,
  200,
  450,
  25
);

const buffer = canvas.toBuffer("image/png");

fs.writeFileSync("./output1.png", buffer);
//--------------------------------------------------------------------------------------------
const { textin1, textin2, link1, link2, link3, color } = req.body;

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
context.font = "20px Monserrat";
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
