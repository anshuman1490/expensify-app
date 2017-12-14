import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter, { history } from './router/AppRouter';
import { Provider } from 'react-redux';
import { login, logout } from './actions/auth';
import { firebase } from './firebase/firebase.js';

import 'normalize.css/normalize.css';
import './style/style.scss';
import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses';
import { startSetExpenses } from './actions/expenses';
import LoadingPage from './components/LoadingPage';


const store = configureStore();

const Jsx = (
	<Provider store={store}>
		<AppRouter />
	</Provider>
);

let hasRendered = false;
const renderApp = () => {
	if (!hasRendered) {
		ReactDOM.render(Jsx, document.getElementById('app'));
		hasRendered = true;
	}
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
	if (user) {
		store.dispatch(login(user.uid));
		store.dispatch(startSetExpenses()).then(() => {
			renderApp();
			if (history.location.pathname === '/') {
				history.push('/dashboard');
			}
		});
	} else {
		store.dispatch(logout());
		history.push('/');
		renderApp();
	}
});