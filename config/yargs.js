const argv = require('yargs')
  .option('b', {
    alias: 'base',
    type: 'number',
    describe: 'Es la base de la tabla de multiplicar',
    demandOption: true
  })
  .option('h', {
    alias: 'hasta',
    type: 'number',
    describe: 'Limite de la tabla',
    default: 10
  })
  .option('l', {
    alias: 'listar',
    type: 'boolean',
    describe: 'Muestra la tabla de multiplicar en consola',
    default: false
  })
  .check((argv, optios) => {
    if (isNaN(argv.b)) {
      throw 'La base tiene que ser un numero';
    }
    return true;
  })
  .argv;


module.exports = argv;