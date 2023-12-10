import * as fs from "node:fs/promises";

async function main() {
  const data = (await fs.readFile("./input.txt", "utf-8"))
    .trim()
    .split("\n")
    .reduce((occurences, row) => {
      const password = row.split(" ")[2];
      const digit1 = +row.split("-")[0];
      const digit2 = +row.split("-")[1].split(" ")[0];
      const letter = row.split(" ")[1][0];

      const isPositionForLetterOneOccuring = password[digit1 - 1] === letter;
      const isPositionForLetterTwoOccuring = password[digit2 - 1] === letter;

      //xor
      const isOnlyOneOccuring =
        isPositionForLetterOneOccuring !== isPositionForLetterTwoOccuring;

      return isOnlyOneOccuring ? (+occurences + 1).toString() : occurences;
    }, "0");
    console.log(data);
}

await main();
