import fs from 'fs';


function main() {
  const data = fs.readFileSync("./input.txt", 'utf-8')
    .replace(/\r/g, '')
    .split('\n')
    .filter(Boolean)
    .map((line: string) => {
      const [signalPatterns, outputValue] = line.split(
        " | "
      ).map((x) => {
        return x.split(" ").map((string) => {
          const letters = [...string];
          letters.sort();
          return letters.join('');
        })
      });
      return {
        signalPatterns,
        outputValue,
      };
    });
  let counter: number = 0;
  for (const line of data) {
    const matches = line.outputValue.filter((v) => [2, 4, 3, 7].includes(v.length));
    counter += matches.length;
  }
  console.log(counter);
}

main();
