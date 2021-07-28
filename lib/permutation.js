const { writeFileSync } = require('fs');
const { resolve } = require('path');

const reapeatingPermutations = (numArr, k) => {
  const permArray = [];
  const recursivePermutations = singlePerm => {
    if (singlePerm.length >= k) {
      permArray.push(singlePerm.join(''));
      return;
    }
    for (let i = 0; i < numArr.length; i++) {
      recursivePermutations(singlePerm.concat(numArr[i]));
    }
  };
  recursivePermutations([]);
  return permArray;
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
