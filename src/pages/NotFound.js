import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
    <div className="alert alert-warning" role="alert">
        <h4 class="alert-heading">404</h4>
        <hr />
        <p>Page Not Found</p>
        <Link className="btn btn-success" to="/">Home</Link>
    </div>
);

export default NotFound;