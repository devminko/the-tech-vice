import React, { } from 'react';
import { Link } from 'react-router-dom';

import style from './connect-page.module.scss';

// *************************** CONNECT PAGE  *************************** //
const ConnectPage = () => {
  return (
    <div className={style.connectPage}>

      <div className={style.connectLanding}>
        <p className={style.text}>
          Page Under Construction!
          <br />
          <Link to='/' className={style.link}>Take this to get back home!</Link>
        </p>
      </div>

    </div>
  )
};

export default ConnectPage;