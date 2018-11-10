const opts = {
    base: {
        demand: true,
        alias: 'b',
        default: 1
      },
      limit: {
        demand: true,
        alias: 'l',
        default: 10
      }
}

const argv = require("yargs")
                    .command('show', 'Show multiplication table in Console.',opts)
                    .command('create', 'Create file with multiplication table.',opts)
                    .help()
                    .argv;

module.exports = { argv }