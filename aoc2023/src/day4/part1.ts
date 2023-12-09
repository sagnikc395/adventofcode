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

  const listPoints = userNumbers.map((cardnums, idx) => {
    let totalPoints = 0;
    cardnums.map((number) => {
      if (winningNumbers[idx].includes(number)) {
        if (totalPoints === 0) {
          totalPoints += 1;
        } else {
          totalPoints *= 2;
        }
      }
    });
    return totalPoints;
  });
  console.log(listPoints.reduce((a, b) => a + b, 0));
}

await main();
