import PropTypes from 'prop-types';
import cx from 'classnames'
import st from './Button.module.scss'

const Button = ({title, isLight, onClick}) => {
  return (
    <div onClick={onClick} className={cx(st.root, {[st.light]: isLight})}>
      {title}
    </div>
  );
};

Button.defaultProps = {
  isLight: false,
}

Button.propTypes = {
  isLight: PropTypes.bool,
  title: PropTypes.string,
}

export default Button;