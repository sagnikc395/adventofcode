const fs = require("fs").promises;

async function main() {
  const file = await fs.readFile("./input.json", "utf-8");
  const contents = JSON.parse(file);

  //recursively sum all numbers in the object

  const sumnumbers = (obj) => {
    let sum = 0;
    for (const key in obj) {
      if (typeof obj[key] === "number") {
        sum += obj[key];
      } else if (typeof obj[key] === "object") {
        sum += sumnumbers(obj[key]);
      }
    }
    return sum;
  };

  console.log(sumnumbers(contents));
}

try {
  main();
} catch (err) {
  console.error(err);
}
