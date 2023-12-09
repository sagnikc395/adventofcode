const MIN_PRESENTS = 33100000;

const getdivisors = (num) => {
  const divisors = [];
  const sqrt = Math.sqrt(num);

  for (let i = 1; i <= sqrt; i++) {
    if (num % i === 0) {
      divisors.push(i);

      if (i !== num / i) {
        divisors.push(num / i);
      }
    }
  }
  return divisors;
};

let house = 0;
let presents;
do {
  ++house;
  let divisors = getdivisors(house);
  let sum_of_divisors = divisors.reduce((a, b) => a + b);
  presents = sum_of_divisors * 10;
  house;
} while (presents < MIN_PRESENTS);

console.log(house);
