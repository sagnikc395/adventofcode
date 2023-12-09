import * as fs from "node:fs/promises";

function parseCubes(cube: string) {
  const [amount, color] = cube.trim().split(" ");
  return {
    color,
    amount: +amount,
  };
}

async function main() {
  const fileData = (await fs.readFile("./input.txt", "utf-8"))
    .trim()
    .split("\n");

  const groups = fileData.map((line) => {
    const content = line.split(":", 2)[1];
    return content.split(";").map((s) => s.trim().split(", "));
  });

  const sum = groups.reduce((acc, group, i) => {
    const gameIsPossible = group.every((set) =>
      set.every((cube) => {
        const parsed = parseCubes(cube);
        return (
          (parsed.color === "red" && parsed.amount <= 12) ||
          (parsed.color === "green" && parsed.amount <= 13) ||
          (parsed.color === "blue" && parsed.amount <= 14)
        );
      })
    );

    if (gameIsPossible) {
      return acc + (i + 1);
    }

    return acc;
  }, 0);

  console.log(sum);
}

await main();
