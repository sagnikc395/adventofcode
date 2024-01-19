import * as fs from "fs";

function mostFrequentElement(str) {
  let map = new Map();
  for (let i = 0; i < str.length; i++) {
    if (map.has(str[i])) {
      let temp = map.get(str[i]);
      map.set(str[i], temp + 1);
    } else {
      map.set(str[i], 1);
    }
  }
  const sort = Array.from(map.entries()).sort((b, a) => b[1] - a[1]);
  const most = sort[0][0];
  return most;
}

function main() {
  const rawData = fs
    .readFileSync("./input.txt", "utf-8")
    .split("\n")
    .map((item) => String(item));

  let data = rawData.map((str) => str.split(""));
  //console.log(data);
  let stringMapping = [];
  for (let j = 0; j < data[0].length; j++) {
    let colStr = "";
    for (let i = 0; i < data.length; i++) {
      colStr += data[i][j];
    }
    stringMapping.push(colStr);
  }
  let errorCode = "";
  stringMapping.forEach((item) => {
    let mostFreq = mostFrequentElement(item);
    errorCode += mostFreq;
  });
  console.log(errorCode);
}

main();
