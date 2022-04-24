import React from 'react';
import cx from 'classnames'
import st from './Navigation.module.scss';

const Navigation = ({menuItems, isSmall}) => {
  return (
    <ul className={cx(st.nav, {[st.small]: isSmall})}>
      { menuItems.map(item => <li key={item}><a href="#">{item}</a></li>) }
    </ul>
  );
};

export default Navigation;
