import React from 'react';
import PropTypes from 'prop-types';

const CheckboxGroup = ({ label, name, checked, handleChange }) => (
    <div className="form-group form-check">
        <input 
            type="checkbox" 
            className="form-check-input" 
            name={name} 
            id={name} 
            checked={checked} 
            onChange={handleChange} 
        />
        <label className="form-check-label" htmlFor={name}>{label}</label>
    </div>
);

CheckboxGroup.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    handleChange: PropTypes.func.isRequired
};

export default CheckboxGroup;