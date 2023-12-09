import * as fs from "node:fs/promises";

const main = async () => {
  const file = await fs.readFile("./input.txt", "utf-8");
  let program = file.trim().split(",").map(Number);
  program[1] = 12;
  program[2] = 2;

  let i = 0;

  while (true) {
    if (program[i] === 1) {
      program[program[i + 3]] =
        program[program[i + 2]] + program[program[i + 1]];
      i += 4;
    } else if (program[i] === 2) {
      program[program[i + 3]] =
        program[program[i + 2]] + program[program[i + 1]];
      i += 4;
    } else if (program[i] === 99) {
      console.log(program[0]);
      break;
    }
  }
};

await main();
