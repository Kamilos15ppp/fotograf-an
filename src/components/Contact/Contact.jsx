import React from 'react'
import bemCssModules from 'bem-css-modules';

import { default as ContactStyles } from './Contact.module.scss';

const style = bemCssModules(ContactStyles);

const title = 'Skontaktuj się ze mną';

const Contact = () => {
  return (
    <section className={style()}>
      <h1 className={style('title')}>{title.toUpperCase()}</h1>
      <div className={style('wrapper')}>
        <form className={style('form')}>
          <input id="name" type="text" placeholder="IMIĘ" />
          <input id="email" type="text" placeholder="E-MAIL" />
          <textarea id="message" type="text" placeholder="WIADOMOŚĆ"></textarea>
          <input className={style('submit')} type="submit" value="WYŚLIJ" />
        </form>
      </div>
    </section>
  );
}

export default Contact;