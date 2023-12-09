import * as fs from "node:fs/promises";
const MAX_CHAR = 26;

const sortString = (str: string): string => {
  let res = "";
  let charCount = new Array(MAX_CHAR);
  charCount.fill(0);

  for (let i = 0; i < str.length; i++) {
    charCount[str[i].charCodeAt(0) - "a".charCodeAt(0)]++;
  }
  for (let i = 0; i < MAX_CHAR; i++)
    for (let j = 0; j < charCount[i]; j++)
      res += String.fromCharCode("a".charCodeAt(0) + i);

  return res.trim();
};



const main = async () => {
  const file = await fs.readFile("./input.txt", "utf-8");
  const words = file.split("\n").map((item) => item.trim());
  let res = 0;
  for (const arr of words) {
    //check if array is valid or not
    const words = arr.split(" ");
    let temp = [];
    for(const word of words){
      temp.push(sortString(word));
    }
    const uniqueWords = new Set(temp);
    res += uniqueWords.size == temp.length ? 1 : 0;
  }
  console.log(res);
};

await main();
