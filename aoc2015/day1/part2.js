const fs = require('fs').promises;


async function main() {
  const file = await fs.readFile('./input.txt', 'utf8');
  const fileContents = file.trim().split('');


  let curr = 0;
  let posn = 0;

  for (let i = 0; i < fileContents.length; i++) {
    if (fileContents[i] === '(') {
      curr += 1;
      posn += 1;
    }
    else if (fileContents[i] === ')') {
      curr -= 1;
      posn += 1;
      if (curr == -1) {
        console.log(posn);
        break;
      }
    }

  }
}



try {
  main();
}
catch (err) {
  console.log(err);
}