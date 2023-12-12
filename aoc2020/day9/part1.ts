import * as fs from "node:fs/promises";

async function main() {
  const data = (await fs.readFile("./input.txt", "utf-8")).trim().split("\n");

  for (let index = 25; index < data.length; index++) {
    const target = +data[index];
    const lastTwentyFive = data.slice(index - 25, index);
    const values: number[] = [];
    lastTwentyFive.forEach((first) =>
      lastTwentyFive.forEach((second) =>
        first !== second ? values.push(+first + +second) : []
      )
    );
    if (!values.includes(target)) {
      console.log(target);
      break;
    }
  }
}

await main();
