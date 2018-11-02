import React from 'react';
import { shallow } from 'enzyme';

import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should render ExpensesSummary correctly for 1 expense', () => {

    const wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={234} />);    
    expect(wrapper).toMatchSnapshot();
   
});

test('should render ExpensesSummary correctly for multiple expenses', () => {

    const wrapper = shallow(<ExpensesSummary expensesCount={4} expensesTotal={4354} />);    
    expect(wrapper).toMatchSnapshot();
   
});
