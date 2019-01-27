import React from 'react';
import PropTypes from 'prop-types';

const RangeGroup = ({ label, name, min, max, step, value, handleChange }) => (
    <div className="form-group">
        <label htmlFor={name}>{label}</label>
        <input 
            type="range" 
            className="form-control-range" 
            name={name} 
            id={name} 
            min={min}  
            max={max} 
            step={step}
            value={value}
            onChange={handleChange}
        />
    </div>
);

RangeGroup.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    min: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    max: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    step: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    handleChange: PropTypes.func.isRequired
};

export default RangeGroup;