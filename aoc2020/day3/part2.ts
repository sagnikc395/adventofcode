import * as fs from "node:fs/promises";

interface Location {
  xCoordinate: number;
  yCoordinate: number;
  entity: "#" | ".";
}

interface CurrentPosition {
  xCoordinate: number;
  yCoordinate: number;
}

async function main() {
  const data = (await fs.readFile("./input.txt", "utf-8")).trim().split("\n");

  const map = data.map((mapRow, yCoordinate) => {
    return [...mapRow].map<Location>((letter, xCoordinate) => ({
      xCoordinate,
      yCoordinate,
      entity: letter === "#" ? "#" : ".",
    }));
  });

  const countTrees = (
    yIncrement: number,
    xIncrement: number,
    position: CurrentPosition = { xCoordinate: 0, yCoordinate: 0 },
    treeHits: number = 0
  ): number => {
    if (position.yCoordinate >= data.length) return treeHits;

    const location =
      map[position.yCoordinate][position.xCoordinate % data[0].length];

    if (location.entity === "#") {
      treeHits += 1;
    }

    position.xCoordinate += xIncrement;
    position.yCoordinate += yIncrement;

    return countTrees(yIncrement, xIncrement, position, treeHits);
  };

  console.log(
    countTrees(1, 1) *
      countTrees(1, 3) *
      countTrees(1, 5) *
      countTrees(1, 7) *
      countTrees(2, 1)
  );
}

await main();
