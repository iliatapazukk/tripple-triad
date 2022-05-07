import React from 'react';
import Main from './pages/Main';
import {Routes, Route, useLocation} from 'react-router-dom';
import Biography from './pages/Biography';
import Layout from './components/Layout';
import Characters from './pages/Characters';
import About from './pages/About/About';
import Contacts from './pages/Contacts';
import NotFound from './pages/NotFound';
import {scrollTop} from './helpers';

function App() {
  const location = useLocation();
  React.useEffect(() => {
    if (location.hash) {
      const elId = location.hash.substring(1)
      const element = document.getElementById(elId);
      element && element.scrollIntoView({
        block: 'center',
        behavior: 'smooth',
      });
    } else {
      scrollTop()
    }
  }, [location.pathname, location.hash])
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Main/>}/>
        <Route path="characters" element={<Characters /> }/>
        <Route path="characters/:id" element={<Biography /> }/>
        <Route path="about" element={<About /> }/>
        <Route path="contacts" element={<Contacts /> }/>
        <Route path="*" element={<NotFound /> }/>
      </Route>
    </Routes>
  );
}

export default App
