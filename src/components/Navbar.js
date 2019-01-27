import React from 'react';

import Brand from './Brand';
import Nav from './Nav';

const Navbar = () => (
    <nav className="navbar navbar-dark bg-dark">
        <Brand text="CSS Code Generator" />
        <Nav />
    </nav>
);

export default Navbar;