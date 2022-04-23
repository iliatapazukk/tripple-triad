import React from 'react';
import PropTypes from 'prop-types'
import cx from 'classnames'
import st from './Text.module.scss'

const Text = (
  {
    element,
    children,
    className,
    strong,
    italic,
    disabled
  }) => {
  const elementToRender = (condition) => {
    switch (condition) {
      case 'p':
        return 'p'
      case 'span':
        return 'span'
      default:
        return 'div'
    }
  }
  return React.createElement(
    elementToRender(element),
    {
      className: cx(st.root, className, {
        [st.strong]: strong,
        [st.italic]: italic,
        [st.disabled]: disabled,
      }),
      'disabled': disabled,
    }, children);
};

Text.defaultProps = {
  element: 'div',
}

Text.propTypes = {
  element: PropTypes.oneOf(['div', 'p', 'span']).isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  strong: PropTypes.bool,
  italic: PropTypes.bool,
  disabled: PropTypes.bool
}

export default Text;