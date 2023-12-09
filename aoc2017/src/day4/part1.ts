import * as fs from "node:fs/promises";

const main = async () => {
  const file = await fs.readFile("./input.txt", "utf-8");
  const words = file.split("\n").map((item) => item.trim());
  let res = 0;
  for (const arr of words) {
    //check if array is valid or not
    const words = arr.split(" ");
    const uniqueWords = new Set(words);
    res += uniqueWords.size == words.length ? 1 : 0;
  }
  console.log(res);
};

await main();
