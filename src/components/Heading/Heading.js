import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import st from './Heading.module.scss'

const Heading = ({
  level,
  className,
  children,
  backLine,
}) => {
  const element = `h${level}`
  return React.createElement(
    element,
    {
      className: cx(
        st.root,
        st[`h${level}`],
        className,
        {[st.backline]: backLine}
      ),
    }, children);
};

Heading.defaultProps = {
  level: 1,
  backLine: false,
}

Heading.propTypes = {
  level: PropTypes.oneOf([1,2,3,4,5,6]),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  backLine: PropTypes.bool,
}

export default Heading;
