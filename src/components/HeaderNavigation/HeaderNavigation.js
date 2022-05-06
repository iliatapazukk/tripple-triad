import PropTypes from 'prop-types'
import cx from 'classnames';
import st from './HeaderNavigation.module.scss';
import {Link} from 'react-router-dom';

const HeaderNavigation = ({menuItems, isSmall}) => {
  return (
    <ul className={cx(st.root, {[st.small]: isSmall})}>
      { menuItems.map(item => (
        <li key={item.title}>
          <Link to={item.path}>
            {item.title}
          </Link>
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
