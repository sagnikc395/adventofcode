import * as fs from "node:fs/promises";

const main = async () => {
  const data = await fs.readFile("./input.txt", "utf-8");
  const fileContent = data.split("\n").map(Number);
  let highestCount = 0;
  for (let i = 1; i < fileContent.length; i++) {
    if (
      fileContent[i] + fileContent[i + 1] + fileContent[i + 2] >
      fileContent[i - 1] + fileContent[i] + fileContent[i + 1]
    ) {
      highestCount += 1;
    }
  }
  console.log(highestCount);
};

await main();
