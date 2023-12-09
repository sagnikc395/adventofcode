const fs = require("fs").promises;

class Santa {
  constructor(directions) {
    this.directions = directions;
    this.x = 0;
    this.y = 0;
    this.rx = 0;
    this.ry = 0;
    this.visited = {};
  }

  travel() {
    this.visited[`(${this.x},${this.y})`] = 1;
    this.directions.forEach((direction, i) => {
      this.move(i % 2 === 0, direction);
      //marking the visit as true
      this.visited[`(${this.x},${this.y})`] = 1;
      this.visited[`(${this.rx},${this.ry})`] = 1;
    });
  }

  move(santa, direction) {
    if (santa) {
      if (direction === "^") {
        this.y--;
      } else if (direction === "v") {
        this.y += 1;
      } else if (direction === ">") {
        this.x += 1;
      } else {
        this.x -= 1;
      }
    } else {
      if (direction === "^") {
        this.ry--;
      } else if (direction === "v") {
        this.ry++;
      } else if (direction === ">") {
        this.rx++;
      } else {
        this.rx--;
      }
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
