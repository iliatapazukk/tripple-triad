import PropTypes from 'prop-types';
import cx from 'classnames'
import st from './Button.module.scss'

const Button = ({children, isDark, onClick}) => {
  return (
    <div onClick={onClick} className={cx(st.root, {[st.dark]: isDark})}>
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
}

export default Button;