import * as fs from "node:fs/promises";

const countGames = (cubesub: string): boolean => {
  const items = cubesub.split(",");
  let red = 0;
  let green = 0;
  let blue = 0;
  for (let i = 0; i < items.length; i++) {
    let [qty, type] = items[i].split(" ");
    if (type === "blue") {
      blue += parseInt(qty);
    } else if (type === "red") {
      red += parseInt(qty);
    } else if (type === "green") {
      green += parseInt(qty);
    }
  }
  console.log(blue, red, green);
  if (red <= 12 && blue <= 14 && green <= 13) {
    return true;
  }
  return false;
};

async function main() {
  const data = (await fs.readFile("./temp.txt", "utf-8")).trim().split("\n");
  let result = 0;
  data.forEach((game: string) => {
    const [gameId, sess] = game.trim().split(":");
    const cubeSub = sess.split(";");
    for (let i = 0; i < cubeSub.length; i++) {
      if (countGames(cubeSub[i])) {
        const [gamestr, id] = gameId.split(" ");
        result += parseInt(id);
      }
    }
  });
  console.log(result);
}

await main();
