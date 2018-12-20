import React from 'react';
import { shallow } from 'enzyme';

import { Header }  from '../../components/Header';
import { start } from 'repl';

test('should render the header correctly', () => {

    const wrapper = shallow(<Header startLogout={() => {} } />);
    expect(wrapper.find('h1').length).toBe(1);
    expect(wrapper).toMatchSnapshot();
   
});

test('should call startLogout on button click', () => {
    const startLogout = jest.fn();
    const wrapper = shallow(<Header startLogout={startLogout} />);
    wrapper.find('button').simulate('click');
    expect(startLogout).toHaveBeenCalled();
});



