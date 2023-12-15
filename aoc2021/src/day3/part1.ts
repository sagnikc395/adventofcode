import * as fs from "node:fs/promises";

async function main() {
  const data = (await fs.readFile("./input.txt", "utf-8"))
    .split("\n")
    .map((x) => x.split(""));

  const cols = data[0].length;
  const rows = data.length;

  let gammaBit = "";
  let epsilonBit = "";

  for (let x = 0; x < cols; x++) {
    let bitCount = 0;
    for (let y = 0; y < rows; y++) {
      bitCount += +data[y][x];
    }
    gammaBit += bitCount > rows / 2 ? "1" : "0";
    epsilonBit += bitCount > rows / 2 ? "0" : "1";
  }

  console.log(parseInt(gammaBit, 2) * parseInt(epsilonBit, 2));
}

await main();
