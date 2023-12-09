import * as fs from "node:fs/promises";

async function main() {
  const data = (await fs.readFile("./input.txt", "utf-8")).split("\n");
  let ans = 0;
  const winningNumbers = data.map((line) =>
    line
      .trim()
      .split(":")[1]
      .split("|")[0]
      .split(" ")
      .filter((chars) => chars !== "")
  );

  const userNumbers = data.map((line) =>
    line
      .trim()
      .split(":")[1]
      .split("|")[1]
      .split(" ")
      .filter((chars) => chars !== "")
  );

  const copies: Record<number, number> = {};
  for (let [cardIdx, cardNums] of userNumbers.entries()) {
    let nums = 0;
    for (let [numIdx, number] of winningNumbers.entries()) {
      const winner = winningNumbers[cardIdx].includes(number.join(""));

      if (winner) {
        nums += 1;
      }
    }

    copies[cardIdx] ? "" : (copies[cardIdx] = 0);
    for (let x = 0; x <= copies[cardIdx]; x++) {
      for (let i = 1; i <= nums; i++) {
        copies[cardIdx + i] = copies[cardIdx + i] ? copies[cardIdx + i] + 1 : 1;
      }
    }
  }

  const result = Object.entries(copies).map(([key, value]) => {
    return value + 1;
  });

  console.log(result.reduce((a, b) => a + b));
}

await main();
