const {validarLinks} = require ('./validate.js');
const funciones = require('./api.js');
 const mdLinks = (ruta, options) => {
  return promesa = new Promise((resolve) => {
    if(options.validate === true){
      resolve(validarLinks(funciones.guardarLinks(ruta)));
      //console.log('SI LLEGA AQUI');
    }else {
      resolve(funciones.guardarLinks(ruta));
    }
  });
 }

module.exports ={mdLinks};

