const { createFile } = require("./utils/multiply");

let base = "x";

createFile(base).then(r => console.log(r)).catch(err => console.log(err));