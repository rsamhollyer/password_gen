const { writeFileSync } = require('fs');
const { resolve } = require('path');
const words = require('../data/apiwords.json');
const permutations = require('../data/permutations.json');

function createObject(wordJson) {
  const cache = wordJson.reduce((acc, cur, idx) => {
    const key = permutations[idx];
    acc[key] = cur.word;
    return acc;
  }, {});
  return cache;
}
async function adjustWords() {
  try {
    const data = await JSON.stringify(createObject(words), null, 2);

    const jsonPath = resolve(__dirname, '../data/words.json');
    await writeFileSync(jsonPath, data, { flag: 'w' });
  } catch (error) {
    console.log(error);
    return error;
  }
}

adjustWords();
