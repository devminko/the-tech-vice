import React, { } from 'react';
import { Link } from 'react-router-dom';

import style from './notfound-page.module.scss';

// *************************** NOT FOUND PAGE *************************** //
const NotFoundPage = () => {
  return (
    <div className={style.notfoundPage}>
      
      <div className={style.content}>
        <p className={style.text}>
          You've gone too far!
          <br />
          <Link to='/' className={style.link}>Take this to get back home!</Link>
        </p>
      </div>

    </div>
  )
};

export default NotFoundPage;