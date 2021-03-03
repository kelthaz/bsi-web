import React from 'react';
import { mount } from 'enzyme';
import Confetti from './Confetti';

const ID_CONFETTI = 1;

describe('Pruebas en el componente Confetti', () => {
  it('Debe mostrar dos líneas y un orden dentro del componente', () => {
    // arrange
    let particles = [];
    let id = ID_CONFETTI;
    id += 1;

    particles = [...particles, id];
    const wrap = mount(<>
    {particles.map((_id) => (
      <Confetti key={_id} count={Math.floor(window.innerWidth / 20)} />
    ))}
    </>);
    // assert
    expect(wrap.find('svg').exists()).toBeTruthy();
  });
});
