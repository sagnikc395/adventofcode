import * as fs from "node:fs";

function main() {
  let data = fs.readFileSync("./example.txt", "utf-8");
  data = data.split("\n").join("");
  
}

main();
