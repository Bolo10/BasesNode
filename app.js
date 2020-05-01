var colors = require('colors/safe'); //LLAMADO AL PAQUETE COLORS FUNCIOON SAGE

const argv = require("./config/yargs").argv; //LLAMADO AL PAQUETE DONDE CONFIGURAMOS ARGV EN YARGS 
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar'); // LLAMADO A LA CARPETA MULTIPLICAR Y LUEGO AL JS MULTIPLICAR

let comando = argv._[0];
let base = argv.base; //DEFINICION DE UN LET DONDE ESTE ARGUMENTAADO CON EL COMANDO BASE Y LIMITE
let limite = argv.limite;

switch (comando) {
    case 'listar':
        listarTabla(base, limite);
        break;
    case 'crear':
        crearArchivo(base, limite)
            .then(mensaje => console.log(colors.blue(mensaje)))
            .catch(err => console.log(colors.red(err)));
        break;
    default:
        console.log('comando no válido!');
}