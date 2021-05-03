import getDateBirth from './getDateBirth';

describe('Pruebas para el helper de getDateBirth', () => {
  it('Debe de devolver la fecha correctamente del rfc de una persona fisica', () => {
    // arrange
    const rfc = 'JUMM520313PA9';
    const fechaEsperada = '13/03/1952';
    // act
    const dateBirth = getDateBirth(rfc);
    // assert
    expect(dateBirth).toBe(fechaEsperada);
  });
  it('Debe de devolver la fecha correctamente del rfc de una persona moral', () => {
    // arrange
    const rfc = 'UMM520313PA9';
    const fechaEsperada = '13/03/1952';
    // act
    const dateBirth = getDateBirth(rfc);
    // assert
    expect(dateBirth).toBe(fechaEsperada);
  });
});
