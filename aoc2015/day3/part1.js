const fs = require("fs").promises;

class Santa {
  constructor(directions) {
    this.directions = directions;
    this.x = 0;
    this.y = 0;
    this.visited = {};
  }

  travel() {
    this.visited[`(${this.x},${this.y})`] = 1;
    this.directions.forEach((direction) => {
      this.move(direction);
      //marking the visit as true
      this.visited[`(${this.x},${this.y})`] = 1;
    });
  }

  move(direction) {
    if (direction === "^") {
      this.y--;
    } else if (direction === "v") {
      this.y += 1;
    } else if (direction === ">") {
      this.x += 1;
    } else {
      this.x -= 1;
    }
  }
  houseVisited() {
    return Object.values(this.visited).reduce((start, acc) => start + acc, 0);
  }
}

async function main() {
  const file = await fs.readFile("./input.txt", "utf-8");
  const contentst = file.trim().split("");
  let santa = new Santa(contentst);
  santa.travel();
  console.log(santa.houseVisited());
  //console.log(contentst);
}

try {
  main();
} catch (err) {
  console.error(err);
}
