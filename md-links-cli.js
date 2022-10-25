const  mdLinks = require('./index.js');

const mostarConsola = (path, opciones) => {
    if(opciones === '--validate'){
        return mdLinks(path, {validate: true})
    };

    console.log(path, opciones + 'llega'); 
};


module.exports ={mostarConsola};