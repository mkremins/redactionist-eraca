const fs = require("fs");
const lines = fs.readFileSync("./SUBTLEXus74286words.txt").toString().split("\n");
const lookup = {};
for (const line of lines) {
  const parts = line.split(/\s+/);
  const stem = parts[0];
  const subtlwf = parseFloat(parts[5]); // count per million
  const freq = subtlwf / 1000000;
  lookup[stem.toLowerCase()] = freq;
}
fs.writeFileSync("./wordFreqData.js", JSON.stringify(lookup));
