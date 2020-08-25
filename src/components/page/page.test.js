import React from 'react';
import Page from './page';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import store from '../../redux/store';

configure({ adapter: new Adapter() });

test('Test de renderizado', () => {
    const wrapper = mount(<Provider store={store}><Page /></Provider>);

    expect(wrapper
        .find('.container-page')
    ).toHaveLength(1);
});
