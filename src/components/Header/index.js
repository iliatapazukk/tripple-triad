import Navigation from '../Navigation'
import st from './style.module.css'

const Header = () => {
  const MENU = ['Menu 1', 'Menu 2', 'Menu 3', 'Menu 4'];

  return (
    <header className={st.root}>
      <div className={st.header}>
        <div className={st.container}>
          <div className={st.logo}/>
          <Navigation menuItems={MENU} />
        </div>
      </div>
    </header>
  );
};

export default Header;