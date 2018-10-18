import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configStore from './store/configureStore';
import 'normalize.css/normalize.css'
import './styles/styles.scss';
import { addExpense } from './actions/expenses';
import { setTextFilter, sortByAmount } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';


const store = configStore();

store.dispatch(addExpense({ description: 'Water Bill', amount: 3000, createdAt: 3000 }));
store.dispatch(addExpense({ description: 'Gas Bill', amount: 1000, createdAt: 123 }));
store.dispatch(addExpense({ description: 'Rent', amount: 1500, createdAt: -3000 }));

const visible = getVisibleExpenses(store.getState().expenses, store.getState().filters);

console.log(visible);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
