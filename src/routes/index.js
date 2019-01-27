import React, { lazy } from 'react';

const ColorConverter = lazy(() => import('../pages/ColorConverter'));
const BoxShadowGenerator = lazy(() => import('../pages/BoxShadowGenerator'));
const NotFound = lazy(() => import('../pages/NotFound'));

const routes = [
    {
        path: '/',
        exact: true,
        render: props => <ColorConverter {...props} />
    }, {
        path: '/box-shadow',
        render: props => <BoxShadowGenerator {...props} />
    }, {
        path: '*',
        render: props => <NotFound {...props} />
    }
];

export default routes;