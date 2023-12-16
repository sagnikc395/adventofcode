import * as fs from "node:fs/promises";

const hashAlgorithm = (str: string): number => {
  let currentValue: number = 0;
  for (let i = 0; i < str.length; i++) {
    currentValue += str.charCodeAt(i);
    currentValue *= 17;
    currentValue = currentValue % 256;
  }
  return currentValue;
};

async function main() {
  const data = (await fs.readFile("./input.txt", "utf-8")).trim().split(",");
  console.log(data);
  let result = 0;
  data.forEach((item) => {
    result += hashAlgorithm(item);
    console.log(hashAlgorithm(item));
  });

  console.log(result);
}

await main();
