import React, { } from 'react';
import { Link } from 'react-router-dom';

import style from './home-news.module.scss';

// *************************** HOME NEWS COMPONENT *************************** //
const HomeNews = () => {
  return (
    <div className={style.news}>

      <div className={style.header}>
        <h2 className={style.title}>Recent News</h2>
        <Link to='/news' className={style.link}>
          <span className={style.text}>View All</span>
          <span className={style.symbol}>&#11179;</span>
        </Link>
      </div>

    </div>
  )
};

export default HomeNews;