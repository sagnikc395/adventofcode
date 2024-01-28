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
  const highestPosition = data[data.length - 1];
  const allCosts = Array(highestPosition).fill(0);

  for (let i = 0; i < highestPosition; i++) {
    const fuelCost = data
      .map(
        (posn) => (
          Math.abs(posn - i) * (1 + Math.abs(posn - i)) / 2
        ))
      .reduce((a, b) => a + b, 0);
    allCosts[i] = fuelCost;
  }

  console.log(Math.min(...allCosts));
}

main();
