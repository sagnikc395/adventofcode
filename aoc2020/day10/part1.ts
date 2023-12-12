import * as fs from "node:fs/promises";

async function main() {
  const data = (await fs.readFile("./input.txt", "utf-8"))
    .split("\n")
    .map((x) => +x)
    .sort((a, b) => a - b);
  data.unshift(0);
  let s1 = 0;
  let s3 = 1;
  for (let i = 0; i < data.length; i++) {
    const joltage = data[i];
    const range = data.slice(i, i + 2);

    while (range.length !== 0) {
      const otherJoltage = range.shift() as number;
      const difference = otherJoltage - joltage;
      if (difference === 3) s3 += 1;
      if (difference === 1) s1 += 1;
    }
  }
  console.log(s1 + s3);
}

await main();
