import fs from "fs";

type MatchType = {
  [key: string]: string | undefined;
};

function main() {
  const data = fs
    .readFileSync("./input.txt", "utf-8")
    .replace(/\r/g, "")
    .split("\n")
    .filter(Boolean)
    .map((line: string) => {
      const [signalPatterns, outputValue] = line.split(" | ").map((x) => {
        return x.split(" ").map((string) => {
          const letters = [...string];
          letters.sort();
          return letters.join("");
        });
      });
      return {
        signalPatterns,
        outputValue,
      };
    });
  let total = 0;
  for (const line of data) {
    const matches: MatchType = {
      1: line.signalPatterns.find((x) => x.length === 2),
      4: line.signalPatterns.find((x) => x.length === 4),
      7: line.signalPatterns.find((x) => x.length === 3),
      8: line.signalPatterns.find((x) => x.length === 7),
    };

    matches[6] = line.signalPatterns.find(
      (x) => x.length === 6 && x !== matches[6] && includes(x, matches[1])
    );
    matches[9] = line.signalPatterns.find(
      (x) => x.length === 6 && x !== matches[6] && includes(x, matches[4])
    );
    matches[0] = line.signalPatterns.find(
      (x) => x.length === 6 && x !== matches[6] && x !== matches[9]
    );

    matches[3] = line.signalPatterns.find(
      (x) => x.length === 5 && includes(x, matches[1])
    );
    matches[5] = line.signalPatterns.find(
      (x) => x.length === 5 && x !== matches[3] && includes(matches[6]!, x)
    );
    matches[2] = line.signalPatterns.find(
      (x) => x.length === 5 && x !== matches[3] && x !== matches[5]
    );

    const translationTable = Object.fromEntries(
      Object.entries(matches).map((x) => x.reverse())
    );

    const translated = Number(
      line.outputValue.map((signal) => translationTable[signal]).join("")
    );

    total += translated;
  }
  console.log(total);
}

main();
function includes(x: string, arg1: string | undefined) {
  throw new Error("Function not implemented.");
}
