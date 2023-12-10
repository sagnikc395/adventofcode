import * as fs from "node:fs/promises";

const calculateRange = (min: number, max: number): number => {
  return max - Math.round((max - min) / 2);
};

const calculateLetters = (seatNumbers: string[], numberOfSeats: 127 | 7) => {
  let max = +numberOfSeats + 1;
  let min = 0;
  seatNumbers.forEach((letter) => {
    switch (letter) {
      case "F":
      case "L":
        max = calculateRange(min, max);
        break;
      case "B":
      case "R":
        min = calculateRange(min, max);
        break;
      default:
        throw Error("seatLetter not supported");
    }
  });
  return min;
};

const calculateSeating = (seatNumber: string) => {
  const rowSeatingNumbers = seatNumber.split("").slice(0, 7);
  const columnSeatingNumbers = seatNumber.split("").slice(7, 10);
  const row = calculateLetters(rowSeatingNumbers, 127);
  const column = calculateLetters(columnSeatingNumbers, 7);
  const seatId = +row * 8 + +column;
  return seatId;
};

async function main() {
  const data = (await fs.readFile("./input.txt", "utf-8")).split("\n");

  const maxSeatId = data.reduce((prevSeatId, seatNumber) => {
    const seatId = calculateSeating(seatNumber);
    return seatId > prevSeatId ? seatId : prevSeatId;
  }, 0);

  console.log(maxSeatId);
}

await main();
