import * as fs from "fs";

function main() {
  const data = fs
    .readFileSync("./input.txt", "utf-8")
    .split("\n")
    .map((item) => String(item));

  let count = 0;
  const regex = /^(\w)(\w)\2\1$/;
  data.forEach((ip) => {
    if (regex.test(ip)) {
      count += 1;
    }
  });
  console.log(count);
}

main();
