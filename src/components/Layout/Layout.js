import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import { Outlet, useMatch } from 'react-router-dom';
import Container from '../Container';
import cx from 'classnames'
import st from './Layout.module.scss'

const Layout = () => {
  const matchMainPage = useMatch({ path: '/' })
  const matchCharactersPage = useMatch({ path: '/characters' })
  return (
    <>
      <Header />
      { matchMainPage !== null || matchCharactersPage !== null ?
        (
          <Outlet/>
        ) : (
          <div className={st.container}>
            <Container>
              <Outlet />
            </Container>
          </div>
        )}
      <Footer />
    </>
  );
};

export default Layout;
