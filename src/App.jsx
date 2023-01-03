import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Menu from './components/Menu/Menu';
import Header from './components/Header/Header';
import Equipment from './components/Equipment/Equipment';
import Photos from './components/Photos/Photos';
import Offer from './components/Offer/Offer';
import Contact from './components/Contact/Contact';

import './reset.scss';

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const preloaderVisibility = `preloader ${isLoaded ? '' : 'visible'}`;

  useEffect(() => {
    const preTime = setTimeout(() => setIsLoaded(true), 1500);

    return () => clearTimeout(preTime);
  }, []);


  return (
    <>
      <div className={preloaderVisibility}>
        <div className='prespinner'></div>
      </div>
      <Router>
        <Menu />
        <Header id='header' />
        <Equipment id='equipment' />
        <Photos id='photos' />
        <Offer id='offer' />
        <Contact id='contact' />
      </Router>
    </>
  );
};

export default App;
