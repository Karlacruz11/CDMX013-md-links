const {validarLinks} = require('../validate.js');
const mocks = require ('./mockData.js');


describe('funcion validar links', () => {

  it('should a function', () => {
    expect(typeof validarLinks).toBe('function');
    expect(typeof validarLinks).not.toBe('String');
    //console.log('FIX ME!');
  });

it('verifica los links --validate', ()=> {
     return (validarLinks(mocks.input)).then((resultado) =>{
      expect(resultado).toEqual(mocks.output);
    })
   });

});



