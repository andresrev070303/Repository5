import bisiesto from './anioBisiesto';

describe('bisiesto', () => {
  it('Si el año es divisible entre 400 entonces devuelve "Bisiesto"', () => {
    expect(bisiesto(2000)).toEqual("Bisiesto");
  });
});
it('Si el año es divisible entre 100 pero no entre 400 entonces devuelve "No es bisiesto"', () => {
  expect(bisiesto(1700)).toEqual("No es bisiesto");
});
it('Si el año es divisible entre 4 pero no entre 100 entonces devuelve "Bisiesto"', () => {
  expect(bisiesto(2008)).toEqual("Bisiesto");
});
it('Si el año no es divisible entre 4 entonces devuelve "No es bisiesto"', () => {
  expect(bisiesto(2017)).toEqual("No es bisiesto");
});