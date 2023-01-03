import React, { useState } from 'react'
import { Link } from 'react-scroll';
import bemCssModules from 'bem-css-modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';

import { default as MenuStyles } from './Menu.module.scss';

const style = bemCssModules(MenuStyles);

const menuItems = [
  {
    id: 1,
    to: 'header',
    text: 'O mnie',
  },
  {
    id: 2,
    to: 'equipment',
    text: 'Sprzęt',
  },
  {
    id: 3,
    to: 'photos',
    text: 'Zdjęcia',
  },
  {
    id: 4,
    to: 'offer',
    text: 'Oferta',
  },
  {
    id: 5,
    to: 'contact',
    text: 'Kontakt',
  },
];

const Menu = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleMenuVisibility = () => {
    const menuElements = document.querySelector('.menu__options');
    const isDesktop = window.innerWidth > 1280 ? true : false;
    const topOffsetMenu = menuElements.offsetTop;

    setIsMenuVisible(prev => !prev);

    topOffsetMenu >= 0 && !isDesktop ? menuElements.style.top = '-100vh' : menuElements.style.top = '0';
  }

  const menu = React.useMemo(() => menuItems.map(({ id, to, text }) => (
    <li className={style('link')} key={id}>
      <Link
        to={to}
        smooth={true}
        delay={450}
        offset={0}
        onClick={handleMenuVisibility}
      >
        {text}
      </Link>
    </li>
  )));

  return (
    <nav className={style()}>
      <ul className={style('options')}>
        {menu}
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