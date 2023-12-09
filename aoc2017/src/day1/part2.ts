import * as fs from "node:fs/promises";

async function main() {
  const file = await fs.readFile("./input.txt", "utf-8");
  const contents = file.trim();
  const digits = contents.split("").map(Number);
  const length = digits.length;
  let sum = 0;

  for (let i = 0; i < length; i++) {
    const nextIndex = (i + length / 2) % length;
    if (digits[i] === digits[nextIndex]) {
      sum += digits[i];
    }
  }

  console.log(sum);
}

await main();
