const fileSystem = require('fs');

let base = 1;
let data = "";

for (let index = 0; index <= 10; index++) {
    data += `${base} * ${index} = ${base * index}\n`;
}

fileSystem.writeFile(`tables/table-${base}.txt`, data, (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});