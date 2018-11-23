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
import './firebase/firebase';

const store = configStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
