#!/usr/bin/env node

const { clifuncion } = require('./cli-fun.js');


const path = process.argv[2];
let opcionUno = process.argv[3];
let opcionDos = process.argv[4];

if (path === undefined){
    console.log ("Ingresa un valor path");
}else{
    if(opcionUno === undefined){
        opcionUno = "";
    }else if(opcionDos === undefined){
        opcionDos = "";
    }
    clifuncion(path, opcionUno, opcionDos).then(resultado => console.log(resultado));
 }