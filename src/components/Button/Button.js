import PropTypes from 'prop-types';
import cx from 'classnames'
import st from './Button.module.scss'

const Button = ({children, isDark, onClick}) => {
  const handleCClick = () => onClick && onClick()
  return (
    <div onClick={handleCClick} className={cx(st.root, {[st.dark]: isDark})}>
      {children}
    </div>
  );
};

Button.defaultProps = {
  isDark: false,
}

Button.propTypes = {
  isDark: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func
}

export default Button;