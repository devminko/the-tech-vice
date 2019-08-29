import React, { } from 'react';

import style from './contact-page.module.scss';

// *************************** CONTACT PAGE  *************************** //
const ContactPage = () => {
  return (
    <div className={style.contactPage}>

      <div className={style.contactLanding}>
        <h2 className={style.title}>Let's Have a Chat</h2>
      </div>

      <div className={style.header}>
        <h3 className={style.subtitle}>Contact Us</h3>
      </div>

      <div className={style.numberContainer}>
        <p className={style.number}>
          (+1) 111-222-3333
        </p>
      </div>

      <div className={style.emailContainer}>
        <p className={style.email}>
          <a href='mailto:thetechvice.ttv@gmail.com' className={style.link}>thetechvice.ttv@gmail.com</a>
        </p>
      </div>

    </div>
  )
};

export default ContactPage;