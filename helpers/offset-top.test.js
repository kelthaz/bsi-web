import { mount } from 'enzyme';
import offsetTop from './offsetTop';

describe('Pruebas en el helper offsetTop', () => {
  beforeEach(() => {
    const div = document.createElement('div');
    div.setAttribute('id', 'container');
    document.body.appendChild(div);
  });

  it('Debe retornar el valor del offset superior del elemento home', () => {
    // arrange
    mount(<div id="home" />, { attachTo: document.getElementById('container') });
    // act
    const actual = offsetTop('home');
    // assert
    expect(actual).toBe(0);
  });

  afterEach(() => {
    const div = document.getElementById('container');
    if (div) {
      document.body.removeChild(div);
    }
  });
});
