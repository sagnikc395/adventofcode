import * as fs from "node:fs/promises";

async function main() {
  const data = (await fs.readFile("./input.txt", "utf-8"))
    .split("\n")
    .map((x) => +x)
    .sort((a, b) => a - b);

  data.unshift(0);

  const count: number[] = [1];
  for (let i = 0; i < data.length; i++) {
    const range = data.slice(0, i);
    for (let j = 0; j < range.length; j++) {
      const diff = data[i] - data[j];
      if (diff <= 3) {
        if (count[i] === undefined) count[i] = 0;
        if (count[j] === undefined) count[j] = 0;
        count[i] += count[j];
      }
    }
  }

  console.log(count[data.length - 1]);
}

await main();
