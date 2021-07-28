const { writeFileSync } = require('fs');
const { resolve } = require('path');

const obj = {}

for(let i=33;i<127;++i){
 JSON.stringify(obj[i]=String.fromCharCode(i));
} 
const jsonPath = resolve(__dirname, './ascii.json');
const json = JSON.stringify(obj,null,2)
writeFileSync(jsonPath, json, { flag: 'w+' });