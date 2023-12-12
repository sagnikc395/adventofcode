import * as fs from "node:fs/promises";

const getAssignment = (bits: string[][], isCo2: boolean) => {
  let position = 0;
  while (bits.length > 1) {
    let bitCount = 0;
    for (let x = 0; x < bits.length; x++) {
      bitCount += +bits[x][position];
    }

    const bit = isCo2
      ? bitCount >= bits.length / 2
        ? "0"
        : "1"
      : bitCount >= bits.length / 2
      ? "1"
      : "0";

    for (let x = 0; x < bits.length; x++) {
      if (+bits[x][position] !== +bit) {
        bits[x] = [];
      }
    }
    bits = bits.filter((x) => x.length !== 0);
    position++;
  }

  return bits[0].join("");
};

async function main() {
  const data = (await fs.readFile("./input.txt", "utf-8"))
    .split("\n")
    .map((x) => x.split(""));

  const oxygenRating = getAssignment([...data], false);
  const co2Rating = getAssignment([...data], true);
  console.log(parseInt(oxygenRating, 2) * parseInt(co2Rating, 2));
}

await main();
