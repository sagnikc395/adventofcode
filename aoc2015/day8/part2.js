const fs = require("fs").promises;

async function main() {
  const file = await fs.readFile("./input.txt", "utf-8");
  const contents = file.trim().split("\n");

  const result = contents.reduce((sum, str) => {
    return sum + JSON.stringify(str).length - str.length;
  }, 0);

  console.log(result);
}

try {
  main();
} catch (err) {
  console.log(err);
}
