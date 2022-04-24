import PropTypes from 'prop-types'
import cx from 'classnames';
import st from './HeaderNavigation.module.scss';

const HeaderNavigation = ({menuItems, isSmall}) => {
  return (
    <ul className={cx(st.root, {[st.small]: isSmall})}>
      { menuItems.map(item => <li key={item}><a href="#">{item}</a></li>) }
    </ul>
  );
};

HeaderNavigation.propTypes = {
  menuItems: PropTypes.array,
  isSmall: PropTypes.bool,
}

export default HeaderNavigation;
