import React from 'react'
import bemCssModules from 'bem-css-modules';

import { default as PhotosStyles } from './Photos.module.scss';

import photo1 from '../../images/photo1.jpg';
import photo2 from '../../images/photo2.jpg';
import photo3 from '../../images/photo3.jpg';
import photo4 from '../../images/photo4.jpg';
import photo5 from '../../images/photo5.jpg';
import photo6 from '../../images/photo6.jpg';
import photo7 from '../../images/photo7.jpg';
import photo8 from '../../images/photo8.jpg';

const style = bemCssModules(PhotosStyles);

const photosData = [
  {
    id: 1,
    src: photo1,
    alt: 'photo1',
  },
  {
    id: 2,
    src: photo2,
    alt: 'photo2',
  },
  {
    id: 3,
    src: photo3,
    alt: 'photo3',
  },
  {
    id: 4,
    src: photo4,
    alt: 'photo4',
  },
  {
    id: 5,
    src: photo5,
    alt: 'photo5',
  },
  {
    id: 6,
    src: photo6,
    alt: 'photo6',
  },
  {
    id: 7,
    src: photo7,
    alt: 'photo7',
  },
  {
    id: 8,
    src: photo8,
    alt: 'photo8',
  },
];

const title = 'Zdjęcia, które wykonałem';

const Photos = () => {
  const photos = React.useMemo(() => photosData.map(({ id, src, alt }) => (
    <img key={id} src={src} alt={alt} className={style(`image${id}`)} loading='lazy' />
  )));


  return (
    <section className={style()}>
      <h1 className={style('title')}>{title.toUpperCase()}</h1>
      <div className={style('image-wrapper')}>
        {photos}
      </div>
    </section>
  );
}

export default Photos;