import React, { useState } from 'react'
import { Link } from 'react-scroll';
import bemCssModules from 'bem-css-modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';

import { default as MenuStyles } from './Menu.module.scss';

const style = bemCssModules(MenuStyles);

const Menu = () => {

  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleMenuVisibility = () => {
    const menuEl = document.querySelector('.menu__options');
    const isDesktop = window.innerWidth > 1280 ? true : false;
    const topOffsetMenu = menuEl.offsetTop;
    isMenuVisible ? setIsMenuVisible(false) : setIsMenuVisible(true);
    topOffsetMenu >= 0 && !isDesktop ? menuEl.style.top = '-100vh' : menuEl.style.top = '0';
  }

  return (
    <nav className={style()}>
      <ul className={style('options')}>
        <li className={style('link')}>
          <Link
            to='header'
            smooth={true}
            delay={450}
            offset={0}
            onClick={handleMenuVisibility}
          >
            O mnie</Link>
        </li>
        <li className={style('link')}>
          <Link
            to='equipment'
            smooth={true}
            delay={450}
            offset={0}
            onClick={handleMenuVisibility}
          >
            Sprzęt</Link>
        </li>
        <li className={style('link')}>
          <Link
            to='photos'
            smooth={true}
            delay={450}
            onClick={handleMenuVisibility}
          >
            Zdjęcia</Link>
        </li>
        <li className={style('link')}>
          <Link
            to='offer'
            smooth={true}
            delay={450}
            onClick={handleMenuVisibility}
          >
            Oferta</Link>
        </li>
        <li className={style('link')}>
          <Link
            to='contact'
            smooth={true}
            delay={450}
            onClick={handleMenuVisibility}
          >
            Kontakt</Link>
        </li>
      </ul>
      <div className={style('icon-wrapper')}>
        <FontAwesomeIcon
          icon={faAngleDoubleDown}
          className={style(isMenuVisible ? 'icon--rotate' : 'icon')}
          onClick={handleMenuVisibility}
        />
      </div>
    </nav >
  );
}

export default Menu;