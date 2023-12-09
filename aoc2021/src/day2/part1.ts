import fs from "node:fs/promises";

async function main() {
  const file = (await fs.readFile("./input.txt", "utf-8")).split("\n");
  let hD = 0;
  let vD = 0;
  file.forEach((item: string) => {
    const [dir, val] = item.split(" ");
    if (dir == "forward") {
      hD += Number(val);
    }
    if (dir == "down") {
      vD += Number(val);
    }
    if (dir == "up") {
      vD -= Number(val);
    }
  });
  console.log(hD*vD);
}

await main();
