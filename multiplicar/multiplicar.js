const fs = require('fs'); // LLAMADO AL PAQUETE FILESYSTEM LECTURA ESCRITURA DE ARCHIVOS
const colors = require('colors'); //LLAMADO AL PAQUETE COLORS PARA IMPRIMIR CON FORMATOS DE DCOLORES EN CONSOLA

let listarTabla = (base, limite = 10) => {
    if (!Number(base)) {
        console.log(`El valor de la base ${base} no es válido!`);
        return;
    }
    console.log("==========================".green); //EN EL CLG DE ESTAS LINEAS SE VISUALIZA .green PETICION DE IMPRIMIR A COLOR
    console.log(`TABLA DE MULTIPLICAR ${base}`.green);
    console.log("==========================".green);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base *i}`);
    }
}

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        // validar que la base sea un número
        if (!Number(base)) {
            reject(`El valor de la base ${base} no es válido!`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} x ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`EL archivo de la tabla del ${base} al ${limite} ha sido guardado!`);
        });
    });
}

module.exports = {
    crearArchivo, //EXPORTACION DE FUNCIONES COMO MODULOS
    listarTabla
}