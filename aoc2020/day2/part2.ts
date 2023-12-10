import * as fs from "node:fs/promises";

async function main() {
  const data = (await fs.readFile("./input.txt", "utf-8")).trim().split("\n");
  let countValidPass = 0;
  for (const line of data) {
    let [policy, passw] = line.split(":");
    let [count, char] = policy.split(" ");
    let [lowC, upperC] = count.split("-");

    let charCount = 0;
    for (const c of passw) {
      if (c == char) {
        charCount += 1;
      }
    }
    if (charCount >= Number(lowC) && charCount <= Number(upperC)) {
      countValidPass += 1;
    }
  }
  console.log(countValidPass);
}

await main();
