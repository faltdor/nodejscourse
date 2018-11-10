const { createFile } = require("./utils/multiply");
const argv = require("yargs")
                    .command('see', 'Show multiplication table in Console', {
                      base: {
                        demand: true,
                        alias: 'b',
                        default: 1
                      }
                    })
                    .help()
                    .argv;

createFile(argv.base).then(r => console.log(r)).catch(err => console.log(err));