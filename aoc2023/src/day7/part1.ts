import * as fs from "node:fs/promises";

async function main() {
  const data = (await fs.readFile("./smallinput.txt", "utf-8")).trim();
  console.log(data);
}

await main();
