import React from 'react';
import Main from './pages/Main';
import {Routes, Route} from 'react-router-dom';
import Biography from './pages/Biography';
import Layout from './components/Layout';
import Characters from './pages/Characters';
import About from './pages/About/About';
import Contacts from './pages/Contacts';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Main/>}/>
        <Route path="characters" element={<Characters /> }/>
        <Route path="bio/:id" element={<Biography /> }/>
        <Route path="about" element={<About /> }/>
        <Route path="contacts" element={<Contacts /> }/>
      </Route>
    </Routes>
  );
}

export default App
