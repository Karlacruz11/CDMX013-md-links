#!/usr/bin/env node

const { clifuncion } = require('./cli-fun.js');
const mdLinks = require('./index.js');

const input =[];
for(let i = 3; i<process.argv.length; i+= 1){
    input.push(process.argv[i]);
}
const nuevoInput = input.join(' ');
const path = process.argv[2];
clifuncion(path, nuevoInput).then(resultado =>
    console.log('RESULTADO', resultado)).catch(error => console.error());
//console.log(clifunction(path , nuevoInput));
//const [,, ...args]  = process.argv;
