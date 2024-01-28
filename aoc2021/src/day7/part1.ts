import fs from 'fs';

function median(array: number[]): number {
  const internalArr = [...array];
  internalArr.sort((a, b) => a - b);
  if (internalArr.length % 2 === 0) {
    return (
      internalArr[internalArr.length / 2 - 1] +
      internalArr[internalArr.length / 2]
    ) / 2;
  } else {
    return internalArr[Math.floor(internalArr.length / 2)];
  }
}


function main() {
  const data = fs.readFileSync("./input.txt", 'utf-8').replace(/[\r\n]/g, '').split(',').map(Number);

  data.sort((a, b) => a - b);
  const meetAt = median(data);
  const fuelCost = data.map((posn) => Math.abs(posn - meetAt)).reduce((a, b) => a + b, 0);
  console.log(fuelCost);
}

main();
