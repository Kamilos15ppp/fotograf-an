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

const imagesData = [
  {
    id: 1,
    src: camera,
    alt: 'camera',
  },
  {
    id: 2,
    src: lens,
    alt: 'lens',
  },
  {
    id: 3,
    src: camera2,
    alt: 'camera2',
  },
  {
    id: 4,
    src: camera3,
    alt: 'camera3',
  },
  {
    id: 5,
    src: laptop,
    alt: 'laptop',
  },
  {
    id: 6,
    src: drone,
    alt: 'drone',
  },
];

const title = 'Sprzęt, który używam do pracy';

const Equipment = () => {
  const images = React.useMemo(() => imagesData.map(({ id, src, alt }) => (
    <img key={id} src={src} alt={alt} className={style('image')} loading='lazy' />
  )));

  return (
    <section className={style()}>
      <h1 className={style('title')}>{title.toUpperCase()}</h1>
      <div className={style('image-wrapper')}>
        {images}
      </div>
    </section>
  );
}

export default Equipment;