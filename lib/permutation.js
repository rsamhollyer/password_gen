const { writeFileSync } = require('fs');
const { resolve } = require('path');

const reapeatingPermutations = (permuteArray, k) => {
  const holdingArr = [];
  const recursivePermutations = singleSolution => {
    if (singleSolution.length >= k) {
      holdingArr.push(parseInt(singleSolution.join('')));
      return;
    }
    for (let i = 0; i < permuteArray.length; i++) {
      recursivePermutations(singleSolution.concat(permuteArray[i]));
    }
  };
  recursivePermutations([]);
  return holdingArr;
};

async function writePerms() {
  try {
    const data = await JSON.stringify(
      reapeatingPermutations([1, 2, 3, 4, 5, 6], 5),
      null,
      2
    );

    const jsonPath = resolve(__dirname, '../data/permutations.json');
    await writeFileSync(jsonPath, data, { flag: 'w' });
  } catch (error) {
    console.log(error);
    return error;
  }
}

writePerms();
