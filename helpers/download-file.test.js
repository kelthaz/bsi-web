import downloadFile from './downloadFile';

describe('Pruebas en el helper dateFormatter', () => {
  it('Debe simular la descarga de un archivo', () => {
    // arrange
    window.URL.createObjectURL = () => 'data:application/txt,hello%20world';
    document.body.appendChild = jest.fn();
    const link = {
      click: jest.fn(),
      remove: jest.fn()
    };
    jest.spyOn(document, 'createElement').mockImplementation(() => link);
    // act
    downloadFile('this is a blob', 'Archivo inexistente', 'txt');
    // assert
    expect(link.download).toEqual('Archivo inexistente.txt');
    expect(link.href).toEqual('data:application/txt,hello%20world');
    expect(link.click).toHaveBeenCalledTimes(1);
  });
});
