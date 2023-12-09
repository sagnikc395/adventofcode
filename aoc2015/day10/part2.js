let input = "1113222113";

function main() {
  // applying process 40 times
  for (let i = 0; i < 50; i++) {
    let re = /(\d)\1*/g;
    let string = "";
    let result;
    while ((result = re.exec(input))) string += result[0].length + result[1];
    input = string;
  }
  console.log(input.length);
}

main();
