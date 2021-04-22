import { getCookie, setCookie } from './cookie';

describe('Pruebas en el helper cookie', () => {
  it('Debe de traer la cookie', () => {
    // arrange
    const cookie = 'ga=GA1.2.1212250118.1605644474';
    const [key, value] = cookie.split('=');
    document.cookie = cookie;
    // act
    const result = getCookie(key);
    // assert
    expect(result).toBe(value);
  });
  it('Debe de traer la cookie', () => {
    // arrange
    const cookie = 'nombre';
    const valueCookie = 'jesus';
    // act
    setCookie(cookie, valueCookie, new Date().getTime + 1000 * 60);
    // assert
    expect(document.cookie.includes(`${cookie}=${valueCookie}`)).toBe(true);
  });
});
