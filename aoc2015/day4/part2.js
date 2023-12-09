const crypto = require("crypto");

const input = "ckczppom";
const test = "abcdef";

function main() {
  //let startHash = crypto.createHash("md5").update(input).digest("hex");
  let hash;
  let str;
  let i = -1;
  do {
    i += 1;
    str = `${input}${i}`;
    hash = crypto.createHash("md5").update(str).digest("hex");
  } while (hash.substr(0, 6) != "000000");

  console.log(i);
}

main();
