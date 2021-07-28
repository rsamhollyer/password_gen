const randomNumber = require('random-number-csprng');
const words = require('../data/words.json');

async function random() {
  const number = [];
  while (number.length < 5) {
    number.push(await randomNumber(1, 6));
  }
  return [number.join('')];
}

const passwords = async length => {
  const passwordSet = new Set();

  while (passwordSet.size < length) {
    const numbers = await random();
    passwordSet.add(words[numbers]);
  }
  console.log([...passwordSet].join(' '));
  return passwordSet;
};
passwords(8);
