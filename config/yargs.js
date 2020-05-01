let opc = { //ABREVIACIONES PARA LOS COMANDOS -b 5 -l 12
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
};

const argv = require('yargs') // LLAMADO AL MODULO YARGS PARA PODER VISUALIZAR AYUDA
    .command('listar', 'Imprime en consola la tabla de multiplicar', opc) // CREACION DE COMANDOS PARA LA EJECUCION DE UNA APP
    .command('crear', 'Crea un archivo de la tabla de multiplicar', opc)
    .help()
    .argv;

module.exports = {
    argv // EXPORTACION DEL COMANDO YARGS
}