/* eslint-disable no-unused-vars */

const { writeFileSync } = require('fs');
const { resolve } = require('path');
const { getInstance } = require('./instance');

async function getWords() {
  try {
    let { data } = await getInstance();
    data = data.map(item => ({ word: item.word }));
    return data;
  } catch (error) {
    console.error(error.message);
    return error;
  }
}

async function getAllTheWords() {
  let lexiconArray = [];

  while (lexiconArray.length < 7776) {
    try {
      const data = await getWords();
      lexiconArray = [].concat(lexiconArray.concat(data));
      lexiconArray = lexiconArray.reduce((acc, cur) => {
        const wordObj = acc.find(item => item.word === cur.word);
        if (!wordObj) {
          return acc.concat([cur]);
        }
        return acc;
      }, []);
    } catch (error) {
      console.log(error.message);
      return error;
    }
  }
  return lexiconArray.slice(0, 7776);
}

async function writeAllTheWords() {
  try {
    const data = await getAllTheWords().then(response =>
      JSON.stringify(response, null, 2)
    );
    const jsonPath = resolve(__dirname, '../data/apiwords.json');
    await writeFileSync(jsonPath, data, { flag: 'w' });
  } catch (error) {
    console.log(error.message);
    return error;
  }
}
writeAllTheWords();
