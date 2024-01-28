import * as fs from "fs";

function main() {
  const data = fs.readFile('./input.txt','utf-8')
  console.log(data);
}

main();
