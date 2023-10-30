const fs = require('fs');
const colors = require('colors/safe');

const crearArchivo = async (base = 1, listar, hasta) => {

  try {
    let salida = "";
    let consola = "";

    for (let i = 1; i <= hasta; i++) {
      salida += `${base} x ${i} : ${i * base} ${i == hasta ? "" : "\n"}`;
      consola += `${base} ${colors.yellow('x')} ${i} : ${colors.green(i * base)} ${i == hasta ? "" : "\n"}`;
    }

    if (listar) {
      console.log(colors.bgGreen(`=== Tabla del ${base} ===`));
      console.log(consola);
    }

    fs.writeFileSync(`./output/tabla-${base}.txt`, salida);

    return colors.cyan(`tabla-${base}.txt creado correctamente`)
  } catch (error) {
    return colors.red(error);
  }

}


module.exports = {
  crearArchivo
}