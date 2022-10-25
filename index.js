const funciones = require('./api.js');
 const mdLinks = (ruta, options) => {
  return promesa = new Promise((resolve) => {
    if(options.validate === true){
      resolve(funciones.validarLinks(ruta));
    }else{
      resolve(funciones.guardarLinks(ruta));
    }
  });
 }

module.exports ={mdLinks};

//module.exports = () => {
  
  // ...
//};
//console.log('Holis');