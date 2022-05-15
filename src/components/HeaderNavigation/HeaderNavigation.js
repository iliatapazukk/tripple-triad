import PropTypes from 'prop-types'
import {NavLink} from 'react-router-dom';
import cx from 'classnames';
import st from './HeaderNavigation.module.scss';

const HeaderNavigation = ({menuItems, isSmall}) => {
  return (
    <ul className={cx(st.root, {[st.small]: isSmall})}>
      { menuItems.map(item => (
        <li key={item.title}>
          <NavLink
            to={item.path}
            className={({isActive}) => {return isActive ? st.active : null}}
          >
            {item.title}
          </NavLink>
        </li>
      )) }
    </ul>
  );
};

HeaderNavigation.propTypes = {
  menuItems: PropTypes.array,
  isSmall: PropTypes.bool,
}

export default HeaderNavigation;
