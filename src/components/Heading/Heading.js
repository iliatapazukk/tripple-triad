import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import st from './Heading.module.scss'

const Heading = ({
  id,
  level,
  className,
  children,
  backLine,
  withIconOnHover
}) => {
  const element = `h${level}`
  return React.createElement(
    element,
    {
      id,
      className: cx(
        st.root,
        st[`h${level}`],
        className,
        {[st.backline]: backLine},
        {[st.iconHover]: withIconOnHover}
      ),
    }, children);
};

Heading.defaultProps = {
  level: 1,
  backLine: false,
}

Heading.propTypes = {
  id: PropTypes.string,
  level: PropTypes.oneOf([1,2,3,4,5,6]),
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  backLine: PropTypes.bool,
  withIconOnHover: PropTypes.bool,
}

export default Heading;
