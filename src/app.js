import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router/AppRouter';
import { Provider } from 'react-redux';


import 'normalize.css/normalize.css';
import './style/style.scss';
import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses';
import { startSetExpenses } from './actions/expenses';
import { setTextFilter, sortByAmount } from './actions/filters';
import './firebase/firebase.js';

const store = configureStore();


const Jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetExpenses()).then(() => {
	ReactDOM.render(Jsx, document.getElementById('app'));
});
