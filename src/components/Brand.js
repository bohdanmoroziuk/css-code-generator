import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Brand = ({ text }) => (
    <Link className="navbar-brand" to="/">{text}</Link>
);

Brand.propTypes = {
    text: PropTypes.string.isRequired
};

export default Brand;