import * as fs from "node:fs/promises";

const main = async () => {
  const file = await fs.readFile("./input.txt", "utf-8");
  let result = file
    .split("\n")
    .map(Number)
    .map((item) => Math.floor(item / 3) - 2);
  console.log(result.reduce((a, b) => a + b, 0));
};

await main();
