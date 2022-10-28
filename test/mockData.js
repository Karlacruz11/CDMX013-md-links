const input = './prueba/linksprueba.md';
const output = [{
        href: 'https://github.com/maxogden/art-of-node#understanding-node',
        text: 'informacion sobre Node',
        file: './prueba/linksprueba.md',
        statusMessage: 'ok',
        status: 200
},
        { href: 'https://github.com/stevekane/promise-it-wont-hurt/blob/master/exercises/warm_up/problem.md',
text: 'Promesas',
file: './prueba/linksprueba.md',
statusMessage: 'ok',
status: 200 
},
       
{ href: 'https://www.pixar.com/error404',
text: 'Pixar Tristeza',
file: './prueba/linksprueba.md',
statusMessage: 'fail',
status: 404
},
       
{href: 'https://www.lego.com/es-mx/error',
text: 'Lego',
file: './prueba/linksprueba.md',
statusMessage: 'fail',
status: 404
},
{href: 'https://github.com/maxogden/art-of-node#understanding-node',
text: 'informacion sobre Node',
file: './prueba/linksprueba.md',
statusMessage: 'ok',
status: 200
},
         ];

module.exports = {
    input,
    output
}