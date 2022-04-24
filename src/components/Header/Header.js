import React from 'react';
import Navigation from '../Navigation'
import logo from '../../assets/images/logo.png'
import cx from 'classnames'
import st from './Header.module.scss'

const MENU = ['Menu 1', 'Menu 2', 'Menu 3', 'Menu 4'];
const Header = () => {
  const [scroll, setScroll] = React.useState(false)
  React.useEffect(() => {
    const onScroll = () => {
      window.scrollY > 60 ? setScroll(true) : setScroll(false)
    }
    window.addEventListener('scroll', onScroll )

  }, []);

  return (
    <header className={st.root}>
      <div className={cx(st.header, {[st.small] : scroll})}>
        <div className={st.headerWrap}>
          <div className={st.logo}>
            <img src={logo} alt="Triple triad"/>
          </div>
          <Navigation isSmall={scroll > 60} menuItems={MENU} />
        </div>
      </div>
    </header>
  );
};

export default Header;