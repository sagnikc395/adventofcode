import * as fs from "node:fs/promises";

function findPairs(arr: number[]): number[] | null {
  const remainders: { [key: number]: number } = {};

  for (const num of arr) {
    if (remainders[num] !== undefined) {
      return [num, remainders[num]];
    }

    //store the possible remainder in the hashmap
    remainders[num] = 0;

    for (const key in remainders) {
      if (key !== num.toString() && num % parseInt(key) === 0) {
        return [num, parseInt(key)];
      }
    }
  }
  return null;
}

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
    const pairs: number[] = findPairs(vals) as number[];
    pairs.sort((a, b) => a - b);
    values.push(pairs[1] / pairs[0]);
  }
  console.log(values.reduce((a, b) => a + b, 0));
};

await main();
