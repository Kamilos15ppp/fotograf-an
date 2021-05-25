import React from 'react'
import bemCssModules from 'bem-css-modules';

import { default as EquipmentStyles } from './Equipment.module.scss';

import camera from '../../images/camera.png';
import lens from '../../images/lens.png';
import camera2 from '../../images/camera2.png';
import camera3 from '../../images/camera3.png';
import laptop from '../../images/laptop.png';
import drone from '../../images/drone.png';

const style = bemCssModules(EquipmentStyles);

const Equipment = () => {
  const title = 'Sprzęt, który używam do pracy';

  return (
    <section className={style()}>
      <h1 className={style('title')}>{title.toUpperCase()}</h1>
      <div className={style('image-wrapper')}>
        <img src={camera} className={style('image1')} alt='camera' loading='lazy' />
        <img src={lens} className={style('image2')} alt='lens' loading='lazy' />
        <img src={camera2} className={style('image3')} alt='camera2' loading='lazy' />
        <img src={camera3} className={style('image4')} alt='camera3' loading='lazy' />
        <img src={laptop} className={style('image5')} alt='laptop' loading='lazy' />
        <img src={drone} className={style('image6')} alt='drone' loading='lazy' />
      </div>
    </section>
  );
}

export default Equipment;