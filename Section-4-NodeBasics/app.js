const { createFile, showTable } = require("./utils/multiply");
const argv = require("./utils/yargs").argv;

let command = argv._[0];

switch (command) {
    case "create":
            createFile(argv.base, argv.limit).then(r => console.log(r)).catch(err => console.log(err));
        break;
    case "show":
            showTable(argv.base, argv.limit).then(r => console.log(r)).catch(err => console.log(err));
        break;
    default:
        break;
}