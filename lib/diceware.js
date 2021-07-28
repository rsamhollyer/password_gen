const randomNumber = require('random-number-csprng');

async function random() {
  const number = [];
  while (number.length < 5) {
    number.push(await randomNumber(1, 6));
  }
  return [number.join('')];
}

const logger = async () => {
  console.log(await random());
};
logger();
