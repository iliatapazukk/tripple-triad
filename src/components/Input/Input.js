import React from 'react';
import PropTypes from 'prop-types';
import Login from '../../pages/Login';

const Input = ({
  id,
  type,
  label,
  required,
  placeholder,
}) => {
  return (
    <>
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        id={id}
      />
      <label htmlFor={id}>{label}</label>
    </>
  );
};

Login.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  required: PropTypes.bool,
  placeholder: PropTypes.string,
}

export default Input;