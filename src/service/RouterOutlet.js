import React, { Suspense } from 'react';
import {
    Switch,
    Route
} from 'react-router-dom';

import routes from '../routes';

const RouterOutlet = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <Switch>
            {routes && routes.map((route, index) => (
                <Route
                    key={index}
                    {...route}
                />
            ))}
        </Switch>
    </Suspense>
);

export default RouterOutlet;