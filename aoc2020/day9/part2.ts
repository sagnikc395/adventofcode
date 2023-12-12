import * as fs from "node:fs/promises";

async function main() {
  const data = (await fs.readFile("./input.txt", "utf-8")).trim().split("\n");
  let result = 0;
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
      result = target;
      break;
    }
  }
  for (let index = 2; index < data.length; index++) {
    for (let index2 = 0; index2 < data.length; index2++) {
      //mapping each slice input to a number
      const range = data.slice(index2, index2 + index).map((x) => +x);
      const sum = range.reduce((a, b) => a + b, 0);
      if (sum == result) {
        const min = Math.min.apply(Math, range);
        const max = Math.max.apply(Math, range);
        return console.log(min + max);
      }
    }
  }
}

await main();
