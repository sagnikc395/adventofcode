import * as fs from "node:fs/promises";

function shortestpath(instructions) {
  let x = 0;
  let y = 0;

  let direction = "N";

  for (const instruction of instructions) {
    const turn = instruction[0];
    const blocks = parseInt(instruction.slice(1));

    if (turn === "R") {
      if (direction === "N") direction = "E";
      else if (direction === "E") direction = "S";
      else if (direction === "S") direction = "W";
      else direction = "N";
    } else {
      if (direction === "N") direction = "W";
      else if (direction === "W") direction = "S";
      else if (direction === "S") direction = "E";
      else direction = "N";
    }
    // Update position based on the direction and number of blocks
    if (direction === "N") y += blocks;
    else if (direction === "S") y -= blocks;
    else if (direction === "E") x += blocks;
    else x -= blocks;
  }

  const distance = Math.abs(x) + Math.abs(y);
  return distance;
}

async function main() {
  const file = await fs.readFile("./input.txt", "utf-8");
  const contents = file.trim().split(",");
  console.log(contents);
}

try {
  main();
} catch (err) {
  console.error(err);
}
