import React, { useEffect } from 'react'
import bemCssModules from 'bem-css-modules';

import { default as HeaderStyles } from './Header.module.scss';


import logo from '../../images/logo.png';

const style = bemCssModules(HeaderStyles);

const titles = [
  'Fotografia ślubna',
  'Zdjęcia portretowe',
  'Fotografia komercyjna',
  'Oraz wiele więcej',
];

const Header = () => {

  let index = 1;

  useEffect(() => {
    const titleInterval = setInterval(() => {
      const headerTitle = document.querySelector('.header__title');
      index > 3 ? index = 0 : index;
      let title = titles[index];

      headerTitle.classList.add('header__title--hide');
      setTimeout(() => {
        headerTitle.textContent = title;
      }, 500);

      setTimeout(() => {
        headerTitle.classList.remove('header__title--hide');
        index++;
      }, 500);
    }, 4000);

    return () => clearInterval(titleInterval);
  }, []);

  return (
    <section className={style()}>
      <div className={style('logo')}>
        <img src={logo} alt='logo' draggable='false' />
      </div>
      <div className={style('dark')}></div>
      <p className={style('title')}>{titles[0]}</p>
    </section>
  );
}

export default Header;