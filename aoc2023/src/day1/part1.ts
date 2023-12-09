import * as fs from "node:fs/promises";

async function main() {
  const data = (await fs.readFile("./input.txt", "utf-8")).trim().split("\n");
  //console.log(data);
  let arr = [];
  for (let i = 0; i < data.length; i++) {
    let firstDigit = data[i].match(/\d/);
    let lastDigit = data[i].match(/\d/g);
    if (firstDigit !== null && lastDigit !== null) {
      arr.push(Number(firstDigit[0] + lastDigit[lastDigit.length - 1]));
    }
  }
  console.log(arr.reduce((curr, idx) => curr + idx, 0));
}

await main();
