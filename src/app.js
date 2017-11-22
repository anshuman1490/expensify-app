import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router/AppRouter';
import { Provider } from 'react-redux';


import 'normalize.css/normalize.css';
import './style/style.scss';
import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses';
import { addExpense } from './actions/expenses';
import { setTextFilter, sortByAmount } from './actions/filters';

const store = configureStore();

// store.subscribe(() => {
//     const state = store.getState();
//     const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//     console.log(visibleExpenses);
//   });

//store.dispatch(setTextFilter('gas'));


const Jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(Jsx, document.getElementById('app'));