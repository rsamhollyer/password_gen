const { passWords, passCharacters } = require('./diceware');

async function generatePassword(length = 8, isAscii = false) {
  let password;
  if (isAscii) {
    password = await passCharacters(length);
    return password;
  }
  password = await passWords(length);
  return password;
}

module.exports = generatePassword;
