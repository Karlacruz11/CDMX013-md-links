const stats = require ('../stats.js');
const { outputFail } = require('./mockData.js');


const input = [{
    href: 'https://github.com/maxogden/art-of-node#understanding-node',
    text: 'informacion sobre Node',
    file: './prueba/linksprueba.md',
    statusMessage: 'ok',
    status: 200
},
];

describe('funcion totallinks', () => {

    it('Es una funcion', () => {
      expect(typeof stats.totalLinks).toBe('function');
      expect(typeof stats.totalLinks).not.toBe('String');
    });
    it('verifica la cantidad de links totales,', ()=> {
        expect(stats.totalLinks(input)).toBe(`Total: 1`);
    });
});

describe('Unique links', () => {

    it('verifica la cantidad de links  unicos,', ()=> {
        expect(stats.uniqueLinks(input)).toEqual(`Unique: 1`);
    });
});

describe('Broken links', () => {

    it('verifica la cantidad de links  rotos,', ()=> {
        expect(stats.broken(outputFail)).toEqual(`Broken: 2`);
    });
});