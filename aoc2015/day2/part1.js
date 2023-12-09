const fs = require('fs').promises;


function smallestArea(l, w, h) {
  let a = l * w;
  let b = w * h;
  let c = h * l;
  let min_side = Math.min(a, b, c);
  return min_side;
}


async function main() {
  const file = await fs.readFile('./input.txt', 'utf8');
  const contents = file.trim().split('\n');

  let res = 0;
  contents.forEach(line => {
    let [l, w, h] = line.split('x');
    const result = smallestArea(l, w, h) + 2 * l * w + 2 * w * h + 2 * h * l;
    res += result;
  })
  console.log(res);
}


try {
  main();
}
catch (err) {
  console.log(err);
}
