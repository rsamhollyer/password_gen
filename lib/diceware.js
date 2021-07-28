const randomNumber = require('random-number-csprng');
const words = require('../data/words.json');
const ascii = require('../data/ascii.json');

async function random(min, max) {
  const number = [];
  while (number.length < 5) {
    number.push(await randomNumber(min, max));
  }
  return [number.join('')];
}

async function passWords(length) {
  const passwordSet = new Set();

  while (passwordSet.size < length) {
    const numbers = await random(1, 6);
    passwordSet.add(words[numbers]);
  }
  return passwordSet;
}

async function passCharacters(length) {
  let passChars = '';
  while (passChars.length < length) {
    const number = await randomNumber(33, 126);
    const asciiChar = ascii[number];
    passChars += asciiChar;
  }
  return passChars;
}

module.exports = { passWords, passCharacters };
