import React, { } from 'react';
import { NavLink, Link } from 'react-router-dom';

import style from './header.module.scss';

// *************************** HEADER COMPONENT *************************** //
const Header = () => {
  return (
    <div className={style.header}>
    
      <div className={style.logoContainer}>
        <span className={style.logo}><Link to='/'>TechVice</Link></span>
      </div>

      <div className={style.linksContainer}>
        <nav>
          <ul className={style.links}>
            <li><Link to='/' className={style.link}>Shop</Link></li>
            <li><Link to='/' className={style.link}>Who We Are</Link></li>
            <li><Link to='/' className={style.link}>News</Link></li>
            <li><Link to='/' className={style.link}>Sign In</Link></li>
          </ul>
        </nav>
      </div>

    </div>
  )
};

export default Header;