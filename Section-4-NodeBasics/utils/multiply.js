const fileSystem = require('fs');

let createFile = (base, limit = 10) => {
    return new Promise((resolve, reject) => {
        let data = "";
        if(!Number(base)){ reject(`Base ${base} is not a Number.`); return;}
        for (let index = 0; index <= limit; index++) {
            data += `${base} * ${index} = ${base * index}\n`;
        }

        fileSystem.writeFile(`tables/table-${base}.txt`, data, (err) => {
        if (err) {reject(err); return;}
        resolve(`table-${base}.txt`);
        });
    })
}

let showTable = (base, limit = 10) => {
    return new Promise((resolve, reject) => {
        let data = "";
        if(!Number(base)){ reject(`Base ${base} is not a Number.`); return;}
        for (let index = 0; index <= limit; index++) {
            data += `${base} * ${index} = ${base * index}\n`;
        }
        resolve(data);
    })
}

module.exports= { createFile , showTable}