const input = [{
        href: 'https://github.com/maxogden/art-of-node#understanding-node',
        text: 'informacion sobre Node',
        file: './prueba/linksprueba.md',
},
{
    href: 'https://www.pixar.com/error404',
    text: 'Pixar Tristeza',
    file: './prueba/linksprueba.md',
    },
// { href: 'https://github.com/stevekane/promise-it-wont-hurt/blob/master/exercises/warm_up/problem.md',
// text: 'Promesas',
// file: './prueba/linksprueba.md',
// },

// {
// href: 'https://github.com/maxogden/art-of-node#understanding-node',
// text: 'informacion sobre Node',
// file: './prueba/linksprueba.md',
// },
];
const inputFail = [
    {
        href: 'https://www.pixar.com/error404',
        text: 'Pixar Tristeza',
        file: './prueba/linksprueba.md',
        },
        {
        href: 'https://www.lego.com/es-mx/error',
        text: 'Lego',
        file: './prueba/linksprueba.md',
        },
];
const output = [{
        href: 'https://github.com/maxogden/art-of-node#understanding-node',
        text: 'informacion sobre Node',
        file: './prueba/linksprueba.md',
        statusMessage: 'ok',
        status: 200
},
{
    href: 'https://www.pixar.com/error404',
    text: 'Pixar Tristeza',
    file: './prueba/linksprueba.md',
    statusMessage: 'fail',
    status: 404
},
// {
//     href: 'https://github.com/stevekane/promise-it-wont-hurt/blob/master/exercises/warm_up/problem.md',
//     text: 'Promesas',
//     file: './prueba/linksprueba.md',
//     statusMessage: 'ok',
//     status: 200
// },
// {

//     href: 'https://github.com/maxogden/art-of-node#understanding-node',
//     text: 'informacion sobre Node',
//     file: './prueba/linksprueba.md',
//     statusMessage: 'ok',
//     status: 200
// },
         ];
const outputFail = [
    {
    href: 'https://www.pixar.com/error404',
    text: 'Pixar Tristeza',
    file: './prueba/linksprueba.md',
    statusMessage: 'fail',
    status: 404
},
{
    href: 'https://www.lego.com/es-mx/error',
    text: 'Lego',
    file: './prueba/linksprueba.md',
    statusMessage: 'fail',
    status: 404
},
];
module.exports = {
    input,
    output, inputFail, outputFail
}