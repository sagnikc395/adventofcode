import * as fs from "node:fs/promises";

const isValid = (row: string, word: string) => row.includes(word);

async function main() {
  const soln = (await fs.readFile("./input.txt", "utf-8"))
    .trim()
    .split("\n\n")
    .filter((pp) => {
      return (
        isValid(pp, "byr") &&
        isValid(pp, "iyr") &&
        isValid(pp, "eyr") &&
        isValid(pp, "hgt") &&
        isValid(pp, "hcl") &&
        isValid(pp, "ecl") &&
        isValid(pp, "pid")
      );
    });

  console.log(soln.length);
}

await main();
