import React from 'react';
import PropTypes from 'prop-types';

const ColorGroup = ({ label, name, value, handleChange }) => (
    <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input 
            type="color" 
            className="form-control" 
            name={name} 
            id={name} 
            value={value} 
            onChange={handleChange} 
        />
    </div>
);

ColorGroup.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired
}

export default ColorGroup;