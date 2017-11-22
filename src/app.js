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
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const expenseOne = store.dispatch(addExpense({ description: 'water bill', amount: 4500, createdAt:100 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Gas bill', amount:789456 }));
store.dispatch(addExpense({ description: 'cleaning bill', amount:789457, createdAt:200 }));
//store.dispatch(setTextFilter('gas'));


const Jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(Jsx, document.getElementById('app'));