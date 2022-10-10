const express = require("express");
// var fs = require("fs");
// const { createCanvas, loadImage } = require("canvas");
const Router = require("./routes/route");
const app = express();
app.use(express.json());
app.use("/api/v1", Router);
//   downloadURI(dataURL, "stage.png");

const fs = require("fs");
const { registerFont, createCanvas, loadImage } = require("canvas");
registerFont("Montserrat Regular 400.ttf", { family: "Monserrat-regular" });
registerFont("Montserrat SemiBold 600.ttf", { family: "Monserrat-Semibold" });
registerFont("Montserrat Bold 700.ttf", { family: "Monserrat-bold" });
registerFont("Montserrat Medium 500.ttf", { family: "Monserrat-medium" });
function wrapText(context, text, x, y, maxWidth, lineHeight) {
  var words = text.split(" ");
  var line = "";

  for (var n = 0; n < words.length; n++) {
    var testLine = line + words[n] + " ";
    var metrics = context.measureText(testLine);
    var testWidth = metrics.width;
    if (testWidth > maxWidth && n > 0) {
      context.fillText(line, x, y);
      line = words[n] + " ";
      y += lineHeight;
    } else {
      line = testLine;
    }
  }
  context.fillText(line, x, y);
}

app.post("/1", (req, res) => {});
app.post("/2", (req, res) => {});

app.listen(5000, () => console.log(`Server is listening on port 5000...`));
