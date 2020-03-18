#!/usr/bin/env node
var Jimp = require('jimp');
const fs = require('fs');
const path = require('path');


async function main() {
  const args = process.argv.slice(2);

let filePath  = args[0];
if(!filePath) {
  console.log("NO ARGUMENT WAS SENT");
  process.exit(1);
}
const fileName = filePath.split(".")[0].split("-").join("_");
filePath = path.resolve(process.cwd(), filePath);

try{
const image = await Jimp.read(filePath);
const pixels = [];
for (i = 0; i < image.bitmap.width; i++) {
  const pixelRow = [];
  for (j = 0; j < image.bitmap.height; j++) {
    const color = Jimp.intToRGBA(image.getPixelColor(j, i));
    const hexA = getColorHex(color.a);
    pixelRow.push(hexA);
  }
  pixels.push(pixelRow);

}

const hexString = pixels.map(r => r.join('')).join('\n');
const fileString = getFileString(hexString, image.bitmap.width, image.bitmap.height, fileName);
fs.writeFileSync(path.resolve(process.cwd(),`./${fileName}.puml`), fileString);
}
catch(e) {
  console.log(e);
}

}


function getColorHex(a) {
  const num=  Math.round(a /17);

  return num.toString(16).toUpperCase();
}
function getFileString(pixelsString, width, height, name) {
  return `@startuml
sprite $${name} [${width}x${height}/16] {
${pixelsString}
}
@enduml`;
}

main();