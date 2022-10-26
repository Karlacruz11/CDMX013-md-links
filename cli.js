#!/usr/bin/env node

const { clifuncion } = require('./cli-fun.js');


const path = process.argv[2];
const opcionUno = process.argv[3];
const opcionDos = process.argv[4];

clifuncion(path, opcionUno, opcionDos).then(resultado => console.log(resultado));