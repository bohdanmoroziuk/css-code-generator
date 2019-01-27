import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/App';
import ErrorBoundary from './service/ErrorBoundary';

import * as serviceWorker from './serviceWorker';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const Index = () => (
    <Router>
        <ErrorBoundary>
            <App />
        </ErrorBoundary>
    </Router>
);

render(
    <Index />, 
    document.getElementById('root')
);

serviceWorker.unregister();
