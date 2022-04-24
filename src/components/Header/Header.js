import React from 'react'
import HeaderNavigation from '../HeaderNavigation'
import logo from '../../assets/images/logo.png'
import cx from 'classnames'
import st from './Header.module.scss'
import Button from '../Button';

const MENU = ['Menu 1', 'Menu 2', 'Menu 3', 'Menu 4'];
const Header = () => {
  const [scroll, setScroll] = React.useState(false)

  const onScroll = () => {
    window.scrollY > 60 ? setScroll(true) : setScroll(false)
  }
  React.useEffect(() => {
    const watchScroll = () => window.addEventListener('scroll', onScroll )
    watchScroll()
    return () => {
      window.removeEventListener("scroll", onScroll);
    };

  }, []);

  return (
    <header className={st.root}>
      <Button/>
      <div className={cx(st.header, {[st.small] : scroll})}>
        <div className={st.headerWrap}>
          <div className={st.logo}>
            <img src={logo} alt="Triple triad"/>
          </div>
          <HeaderNavigation isSmall={scroll} menuItems={MENU} />
        </div>
      </div>
    </header>
  );
};

export default Header;