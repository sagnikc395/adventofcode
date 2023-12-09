import * as fs from "node:fs/promises";

const main = async () => {
  const data = await fs.readFile("./input.txt", "utf-8");
  const fileContent = data.split("\n").map(Number);
  let highestCount = 0;
  let prev = fileContent[0];
  for (let i = 1; i < fileContent.length; i++) {
    if (fileContent[i] > prev) {
      highestCount += 1;
    }
    prev = fileContent[i];
  }
  console.log(highestCount);
};

await main();
