const fs = require('fs').promises;


async function main() {
  const file = await fs.readFile('./input.txt', 'utf8');
  const fileContents = file.trim().split('');


  let floor = 0;

  fileContents.forEach((item) => {
    if (item === '(') {
      floor += 1;
    }
    else if (item === ')') {
      floor -= 1;
    }
  });
  console.log(floor);
}



try {
  main();
}
catch (err) {
  console.log(err);
}