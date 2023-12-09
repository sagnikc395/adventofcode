const fs = require('fs').promises;




async function main() {
  const file = await fs.readFile('./input.txt', 'utf8');
  const contents = file.trim().split('\n');

  let res = 0;
  contents.forEach(line => {
    let [l, w, h] = line.split('x').map(n => +n);
    let p1 = l + w + l + w;
    let p2 = w + h + w + h;
    let p3 = l + h + l + h;

    let min_peri = Math.min(p1, p2, p3);
    let vol = l * w * h;
    res += min_peri + vol;
  })
  console.log(res);
}


try {
  main();
}
catch (err) {
  console.log(err);
}
