import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => (
    <ul className="nav nav-pills justify-content-end">
        <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to="/" exact>Color Convertor</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" activeClassName="active" to="/box-shadow" exact>Box Shadow</NavLink>
        </li>
    </ul>
);

export default Nav;