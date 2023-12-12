import * as fs from "node:fs/promises";

type Operation = "nop" | "acc" | "jmp";

interface Instruction {
  type: Operation;
  count: number;
  executed: boolean;
}

const mapInstuctions = (input: string[]): Instruction[] =>
  input.map((line) => ({
    type: line.split(" ")[0] as Operation,
    count: +line.split(" ")[1],
    executed: false,
  }));

async function main() {
  const data = (await fs.readFile("./input.txt", "utf-8")).trim().split("\n");
  const inst = mapInstuctions(data);

  let acc = 0;
  let idx = 0;

  while (inst.length > idx) {
    const instruction = inst[idx];
    if (instruction.executed) break;
    instruction.executed = true;

    switch (instruction.type) {
      case "acc":
        idx += 1;
        acc += instruction.count;
        break;
      case "jmp":
        idx += instruction.count;
        break;
      case "nop":
        idx += 1;
        break;
    }
  }
  console.log(acc);
}

await main();

