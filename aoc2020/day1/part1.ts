import * as fs from "node:fs/promises";

async function main() {
  const fileData = (await fs.readFile("./input.txt", "utf-8"))
    .trim()
    .split("\n")
    .map((item) => Number(item));
  let result = 0;
  for (let i = 0; i < fileData.length; i++) {
    for (let j = 0; j < fileData.length; j++) {
      if (fileData[i] + fileData[j] == 2020) {
        result = fileData[i] * fileData[j];
        break;
      }
    }
  }
  console.log(result);
}

await main();
