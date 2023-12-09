import * as fs from "node:fs/promises";

const main = async () => {
  const file = await fs.readFile("./input.txt", "utf-8");
  const rows = file.split("\n");
  let values: number[] = [];
  for (const row of rows) {
    //remove uneven space first
    const vals = row
      .replace(/\s+/g, " ")
      .split(" ")
      .map(Number)
      .sort((a, b) => a - b);
    values.push(vals[vals.length - 1] - vals[0]);
  }
  console.log(values.reduce((a, b) => a + b, 0));
};

await main();
