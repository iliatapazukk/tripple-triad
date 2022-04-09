import React from 'react';
import st from './style.module.css';

const Navigation = ({menuItems}) => {
  return (
    <ul className={st.nav}>
      { menuItems.map(item => <li key={item}><a href="#">{item}</a></li>) }
    </ul>
  );
};

export default Navigation;