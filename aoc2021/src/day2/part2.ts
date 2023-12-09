import fs from "node:fs/promises";

enum Direction {
  Forward,
  Up,
  Down,
}

type Instruction = [direction: Direction, amount: number];

async function main() {
  const file = (await fs.readFile("./input.txt", "utf-8")).split("\n");

  const instructions: Instruction[] = file.map((inst) => {
    const [direction, amnt] = inst.split(" ");
    const val =
      direction === "forward"
        ? Direction.Forward
        : direction === "up"
        ? Direction.Up
        : direction === "down"
        ? Direction.Down
        : null;
    if (val === null) throw new Error(`Invalid direction`);
    return [val, +amnt];
  });

  let rawX = 0;
  let rawY = 0;
  let aimY = 0;
  let aim = 0;
  for (const instruction of instructions) {
    if (instruction[0] === Direction.Up) {
      aim -= instruction[1];
      rawY -= instruction[1];
    } else if (instruction[0] === Direction.Down) {
      aim += instruction[1];
      rawY += instruction[1];
    } else if (instruction[0] === Direction.Forward) {
      rawX += instruction[1];
      aimY += aim * instruction[1];
    }
  }

  console.log(
    "The raw position is",
    rawX,
    "X",
    rawY,
    "Y for a product of",
    rawX * rawY
  );
  console.log(
    "The aim position is",
    rawX,
    "X",
    aimY,
    "Y for a product of",
    rawX * aimY
  );
}

await main();
