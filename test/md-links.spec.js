const funciones = require('../api.js');
const mocks = require ('./mockData.js');


describe('funcion validar links', () => {

  it('should a function', () => {
    expect(typeof funciones.validarLinks).toBe('function');
    expect(typeof funciones.validarLinks).not.toBe('String');
    //console.log('FIX ME!');
  });
//  it('verifica los links --validate', (done) => {
//   funciones.validarLinks(mocks.input).then((resultado) =>{
//     expect(resultado).toEqual(mocks.output);
//     done();
//   });
//  });
it('verifica los links --validate', () => {
     return (funciones.validarLinks(mocks.input)).then((resultado) =>{
      expect(resultado).toEqual(mocks.output);
    })
   });
});



