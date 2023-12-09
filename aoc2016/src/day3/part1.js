import * as fs from "node:fs/promises";

function isvalidTriangle(tri) {
  let triangle = tri.slice(0);
  triangle.sort((a, b) => a - b);
  let [a, b, c] = triangle;
  return a + b > c;
}

function possible_triangles(contents) {
  return contents
    .map((t) => (isvalidTriangle(t) ? 1 : 0))
    .reduce((a, b) => a + b, 0);
}

async function main() {
  const file = await fs.readFile("./input.txt", "utf-8");
  const contents = file.trimStart().split("\n");
  let clean_input = [];

  for (const item in contents.slice(0,1)) {
    const [a, b, c] = item.split("");
    clean_input.push(new Array(a, b, c));
  }
  console.log(clean_input);
  console.log(possible_triangles(clean_input));
}

try {
  main();
} catch (err) {
  console.error(err);
}
