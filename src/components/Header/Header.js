import React from 'react'
import HeaderNavigation from '../HeaderNavigation'
import logo from '../../assets/images/logo.png'
import {useNavigate} from 'react-router-dom';
import {scrollTop} from '../../helpers';
import cx from 'classnames'
import st from './Header.module.scss'

const MENU = [
  {
    title: 'Main',
    path: '/'
  },
  {
    title: 'Characters',
    path: 'characters'
  },
  {
    title: 'About',
    path: 'about',
  },
  {
    title: 'Contacts',
    path: 'contacts'
  },

  ];

const Header = () => {
  const navigate = useNavigate()
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

  const handleLogoClick = () => {
    navigate('/')
    scrollTop()
  }

  return (
    <header className={st.root}>
      <div className={cx(st.header, {[st.small] : scroll})}>
        <div className={st.headerWrap}>
          <div className={st.logo} onClick={handleLogoClick}>
            <img src={logo} alt="Triple triad"/>
          </div>
          <HeaderNavigation isSmall={scroll} menuItems={MENU} />
        </div>
      </div>
    </header>
  );
};

export default Header;