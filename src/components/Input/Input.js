import React from 'react';
import PropTypes from 'prop-types';
import Login from '../../pages/Login';

const Input = ({
  id,
  type,
  label,
  name,
  value,
  required,
  placeholder,
  onChange,
  reference,
}) => {
  return (
    <>
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        id={id}
        ref={reference}
        name={name}
        value={value}
        onChange={onChange}
      />
      <label htmlFor={id}>{label}</label>
    </>
  );
};

Login.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  reference: PropTypes.func
}

export default Input;