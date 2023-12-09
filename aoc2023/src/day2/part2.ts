import * as fs from "node:fs/promises";

async function main() {
  const fileData = (await fs.readFile("./input.txt", "utf-8"))
    .trim()
    .split("\n");

  const groups = fileData.map((line) => {
    const content = line.split(":", 2)[1];
    return content.split(";").map((s) => s.trim().split(", "));
  });

  const sum = groups.reduce((acc, group) => {
    const flat = group.flatMap((set) => set);
    const maxRed = Math.max(
      ...flat.filter((cube) => cube.includes("red")).map((c) => parseInt(c))
    );

    const maxGreen = Math.max(
      ...flat.filter((cube) => cube.includes("green")).map((c) => parseInt(c))
    );
    const maxBlue = Math.max(
      ...flat.filter((cube) => cube.includes("blue")).map((c) => parseInt(c))
    );
    const power = maxBlue * maxGreen * maxRed;

    return acc + power;
  }, 0);

  console.log(sum);
}

await main();
