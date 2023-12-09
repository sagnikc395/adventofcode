const fs = require("fs").promises;

async function main() {
  const file = await fs.readFile("./input.json", "utf-8");
  const contents = JSON.parse(file);

  // count the red numbers
  // https://github.com/MaxArt2501/advent-of-code-2015/blob/master/day-12/part-2.js

  const countredNumbers = (obj) => {
    let array;
    if (Array.isArray(obj)) {
      array = obj;
    } else {
      array = Object.keys(obj).map((key) => obj[key]);
      if (array.includes("red")) return 0;
    }

    return array.reduce((sum, item) => {
      let value = 0;
      if (typeof item === "number") {
        value = item;
      } else if (typeof item === "object") {
        value = countredNumbers(item);
      }
      return sum + value;
    }, 0);
  };

  console.log(countredNumbers(contents));
}

try {
  main();
} catch (err) {
  console.error(err);
}
