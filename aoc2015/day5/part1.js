const fs = require("fs").promises;

const checkVowels = (str) => {
  const m = str.match(/[aeiou]/gi).length;
  return m >= 3 ? true : false;
};

const twiceInARow = (str) => {
    const m = str.match()
}

const check = () => {
  console.log(checkVowels("aeiou"));
  console.log(checkVowels("aei"));
  console.log(checkVowels("xazegov"));
};

check();

/*
async function main() {
  const file = await fs.readFile("./input.txt", "utf8");
  const contents = file.trim().split("\n");

  
}

try {
  main();
} catch (err) {
  console.error(err);
}
*/
