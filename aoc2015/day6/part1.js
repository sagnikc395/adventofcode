const fs = require("fs").promises;

const grid = new Uint8Array(1e6);

const lightAction = (action, x1, y1, x2, y2) => {
  for (let y = +y1; y2 - y >= 0; y++) {
    for (let x = +x1; x2 - x >= 0; x++) {
      let index = y * 1000 + x;
      grid[index] =
        action === "toggle" ? 1 - grid[index] : action === "turn on";
    }
  }
};

async function main() {
  const file = await fs.readFile("./input.txt", "utf-8");
 
  file
    .slice(0, -1)
    .split("\n")
    .forEach((instr) => {
      lightAction(
        ...instr
          .match(/^(turn on|turn off|toggle) (\d+),(\d+) through (\d+),(\d+)$/)
          .slice(1)
      );
    });
  console.log(grid.reduce((sum, curr) => sum + curr))
  
}

try {
  main();
} catch (err) {
  console.log(err);
}
