const randomNumber = require('random-number-csprng');

async function random() {
  const number = [];
  while (number.length < 5) {
    number.push(await randomNumber(1, 6));
  }
  console.log(number.join(''));
  return number;
}
random();
