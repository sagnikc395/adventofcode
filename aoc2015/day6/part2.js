const fs = require("fs").promises;

const grid = new Uint8ClampedArray(1e6);
const diff = {
  "turn on": 1,
  "turn off": -1,
  toggle: 2,
};

async function main() {
  const file = await fs.readFile("./input.txt", "utf-8");
  file
    .slice(0, -1)
    .split("\n")
    .forEach((instr) => {
      let [, action, x1, y1, x2, y2] = instr.match(
        /^(turn on|turn off|toggle) (\d+),(\d+) through (\d+),(\d+)$/
      );

      for (let y = +y1; y2 - y >= 0; y++) {
        for (let x = +x1; x2 - x >= 0; x++) {
          grid[y * 1000 + x] += diff[action];
        }
      }
    });
  console.log(grid.reduce((sum, curr) => sum + curr));
}

try {
  main();
} catch (err) {
  console.log(err);
}
