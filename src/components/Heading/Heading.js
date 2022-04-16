import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import st from './Heading.module.css'

const Heading = ({level, className, children}) => {
  const element = `h${level}`
  return React.createElement(
    element,
    {
      className: cx(st.root, st[`h${level}`], className),
    }, children);
};

Heading.defaultProps = {
  level: 1,
}

Heading.propTypes = {
  level: PropTypes.oneOf([1,2,3,4,5,6]).isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Heading;
