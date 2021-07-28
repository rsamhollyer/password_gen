const { passWords, passCharacters } = require('./diceware');

async function generatePassword(length = 8, isAscii = false) {
  // length = parseInt(length);
  let password;
  if (isAscii) {
    password = await passCharacters(length);
    return password;
  }
  password = await passWords(length);
  console.log(password);
  return password;
}

module.exports = generatePassword;
