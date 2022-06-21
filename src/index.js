import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers/root';
import App from './components/App';
import ErrorBoundary from './service/ErrorBoundary';

import * as serviceWorker from './serviceWorker';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const store = createStore(rootReducer);

const Index = () => (
    <Provider store={store}>
        <Router>
            <ErrorBoundary>
                <App />
            </ErrorBoundary>
        </Router>
    </Provider>
);

render(
    <Index />, 
    document.getElementById('root')
);

serviceWorker.unregister();
