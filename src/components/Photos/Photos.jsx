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

const Photos = () => {
  const title = 'Zdjęcia, które wykonałem';

  return (
    <section className={style()}>
      <h1 className={style('title')}>{title.toUpperCase()}</h1>
      <div className={style('image-wrapper')}>
        <img src={photo1} className={style('image1')} alt='photo1' loading='lazy' />
        <img src={photo2} className={style('image2')} alt='photo2' loading='lazy' />
        <img src={photo3} className={style('image3')} alt='photo3' loading='lazy' />
        <img src={photo4} className={style('image4')} alt='photo4' loading='lazy' />
        <img src={photo5} className={style('image5')} alt='photo5' loading='lazy' />
        <img src={photo6} className={style('image6')} alt='photo6' loading='lazy' />
        <img src={photo7} className={style('image7')} alt='photo7' loading='lazy' />
        <img src={photo8} className={style('image8')} alt='photo8' loading='lazy' />
      </div>
    </section>
  );
}

export default Photos;