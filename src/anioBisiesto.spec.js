import bisiesto from './anioBisiesto';

describe('bisiesto', () => {
  it('Si el año es divisible entre 400 entonces devuelve "Bisiesto"', () => {
    expect(bisiesto(2000)).toEqual("Bisiesto");
  });
});