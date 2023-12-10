import * as fs from "node:fs/promises";

interface Group {
  points: Set<string>;
}

const mapGroup = (groupIndividualAnswers: string[]): Group => {
  const groupUnifiedAnswers: Group = { points: new Set() };

  groupIndividualAnswers.forEach((answer) => {
    answer.split("").forEach((letter) => {
      groupUnifiedAnswers.points.add(letter);
    });
  });
  return groupUnifiedAnswers;
};

async function main() {
  const data = await fs.readFile("./input.txt", "utf-8");
  const result = data.split("\n\n").reduce((yesAns, stringGrp) => {
    const groupIndividualAnswers = stringGrp.split("\n");
    const groupUnifiedAnswers = mapGroup(groupIndividualAnswers);
    const everyonesYesAnswer = [...groupUnifiedAnswers.points].filter(
      (unifiedAnswer) =>
        groupIndividualAnswers.every((individualAnswer) =>
          individualAnswer.includes(unifiedAnswer)
        )
    );
    return yesAns + everyonesYesAnswer.length;
  }, 0);

  console.log(result);
}

await main();
