const fileSystem = require('fs');

let createFile = (base) => {
    return new Promise((resolve, reject) => {
        let data = "";
        if(!Number(base)){ reject(`Base ${base} is not a Number.`); return;}
        for (let index = 0; index <= 10; index++) {
            data += `${base} * ${index} = ${base * index}\n`;
        }

        fileSystem.writeFile(`tables/table-${base}.txt`, data, (err) => {
        if (err) {reject(err); return;}
        resolve(`table-${base}.txt`);
        });
    })
}

module.exports= { createFile }