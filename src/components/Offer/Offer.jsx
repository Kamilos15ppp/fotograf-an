import React from 'react'
import bemCssModules from 'bem-css-modules';

import { default as OfferStyles } from './Offer.module.scss';

import instax from '../../images/instax.png';
import pendrive from '../../images/pendrive.png';

const style = bemCssModules(OfferStyles);

const Offer = () => {
  const title = 'Co mogę zaoferować?';

  return (
    <section className={style()}>
      <div className={style('dark')}></div>
      <h1 className={style('title')}>{title.toUpperCase()}</h1>
      <div className={style('wrapper')}>
        <div className={style('table')}>
          <div className={style('table-header')}>
            <div className={style('header-item')}>Usługa</div>
            <div className={style('header-item')}>Cena</div>
          </div>
          <div>
            <div className={style('table-row')}>
              <div className={style('table-data')}>Zdjęcia ślubne</div>
              <div className={style('table-data')}>1400zł</div>
            </div>
            <div className={style('table-row')}>
              <div className={style('table-data')}>Zdjęcia portretowe</div>
              <div className={style('table-data')}>350zł</div>
            </div>
            <div className={style('table-row')}>
              <div className={style('table-data')}>Zdjęcia komercyjne</div>
              <div className={style('table-data')}>2300zł</div>
            </div>
          </div>
        </div>
        <div className={style('table')}>
          <div className={style('table-header')}>
            <div className={style('header-item')}>Inne usługi</div>
            <div className={style('header-item')}>Cena</div>
          </div>
          <div>
            <div className={style('table-row')}>
              <div className={style('table-data')}>Dojazd na miejsce</div>
              <div className={style('table-data')}>210zł</div>
            </div>
            <div className={style('table-row')}>
              <div className={style('table-data')}>Nośnik USB</div>
              <div className={style('table-data')}>130zł</div>
            </div>
            <div className={style('table-row')}>
              <div className={style('table-data')}>Aparat natychmiastowy</div>
              <div className={style('table-data')}>180zł</div>
            </div>
            <div className={style('table-row')}>
              <div className={style('table-data')}>Prywatna chmura ze zdjęciami</div>
              <div className={style('table-data')}>760zł</div>
            </div>
          </div>
        </div>
        <div className={style('image-wrapper')}>
          <img className={style('image1')} src={instax} alt='instax' />
          <img src={pendrive} alt='pendrive' />
        </div>
      </div>
    </section>
  );
}

export default Offer;