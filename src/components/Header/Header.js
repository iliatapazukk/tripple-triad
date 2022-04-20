import Navigation from '../Navigation'
import logo from '../../assets/images/logo.png'
import st from './Header.module.scss'

const MENU = ['Menu 1', 'Menu 2', 'Menu 3', 'Menu 4'];
const Header = () => {
  return (
    <header className={st.root}>
      <div className={st.header}>
        <div className={st.headerWrap}>
          <div className={st.logo}>
            <img src={logo} alt="Triple triad"/>
          </div>
          <Navigation menuItems={MENU} />
        </div>
      </div>
    </header>
  );
};

export default Header;