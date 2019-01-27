import React from 'react';

import Navbar from './Navbar';
import RouterOutlet from '../service/RouterOutlet';

const App = () => (
    <div className="app">
        <Navbar />

        <div className="container mt-5">
            <RouterOutlet />
        </div>
    </div>
);

export default App;