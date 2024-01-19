import fs from "fs";

function getFrequenceyByChar(s) {
  //get the freqeuncey of a string in another string
  let freq = new Map();
  for (let i = 0; i < s.length; i++) {
    if (freq.has(s[i])) {
      let count = freq.get(s[i]);
      freq.set(s[i], count + 1);
    } else {
      freq.set(s[i], 1);
    }
  }
  let sortedVals = new Map([...freq.entries()].sort((a, b) => b[1] - a[1]));
  return sortedVals;
}

function realRoom(mapping, checksum) {
  let cmap = new Map();
  for (let i = 0; i < checksum.length; i++) {
    if (cmap.has(checksum[i])) {
      let cnt = cmap.get(checksum[i]);
      cmap.set(checksum[i], cnt + 1);
    }
    cmap.set(checksum[i], 1);
  }
  let keysMap = Array.from(cmap.keys());
  let uniqueCharacters = Array.from(new Set(givenString));
  let charactersInTop5Keys = uniqueCharacters.some((char) =>
    keysMap.slice(0, 5).includes(char)
  );
  return charactersInTop5Keys;
}

function main() {
  const data = fs
    .readFileSync("./temp.txt", "utf-8")
    .split("\n")
    .map((item) => String(item));
  let res = 0;
  data.forEach((item) => {
    let [pattern, checksum] = item.split("[");
    checksum = checksum.substring(0, checksum.length - 1);
    let secId = pattern.replace(/\D/g, "");
    pattern = pattern.slice(0, pattern.length - 4);
    pattern = pattern.replace(/-/g, "");
    let mapping = getFrequenceyByChar(pattern);
    // let mapEntries = Array.from(mapping.entries());
    // let topEntries = mapEntries.slice(0, 5);
    // console.log(topEntries);
    // let strToCompare = topEntries
    //   .map(([key, _]) => `${key}`)
    //   .join("")
    //   .split("")
    //   .sort()
    //   .join("");
    // checksum = checksum.split("").sort().join("");
    // if (strToCompare === checksum) {
    //   res += Number(secId);
    // }
  });
  console.log(res);
}

main();
