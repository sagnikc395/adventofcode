import * as fs from "node:fs/promises";

const main = async () => {
  const file = await fs.readFile("./input.txt", "utf-8");
  let result = file
    .split("\n")
    .map(Number)
    .map((item) => {
      let total_fuel = 0;
      while (true) {
        item = Math.floor(item / 3) - 2;
        if (item > 0) {
          total_fuel += item;
        } else {
          break;
        }
      }
      return total_fuel;
    });
  console.log(result.reduce((a, b) => a + b, 0));
};

await main();
