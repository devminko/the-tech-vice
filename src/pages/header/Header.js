import React, { } from 'react';
import { NavLink, Link } from 'react-router-dom';

import CartIcon from '../../components/cart-icon/CartIcon';

import style from './header.module.scss';

// *************************** HEADER COMPONENT *************************** //
const Header = () => {
  return (
    <div className={style.header}>
    
      <div className={style.logoContainer}>
        <span className={style.logo}><Link to='/' className={style.logoLink}>TechVice</Link></span>
      </div>

      <div className={style.linksContainer}>
        <nav>
          <ul className={style.links}>
            <li>
              <NavLink to='/' className={style.link} activeClassName={style.isActive}>Shop</NavLink>
            </li>
            <li>
              <NavLink to='/' className={style.link} activeClassName={style.isActive}>News</NavLink>
            </li>
            <li>
              <NavLink to='/' className={style.link} activeClassName={style.isActive}>Who We Are</NavLink>
            </li>
            <li>
              <NavLink to='/' className={style.link} activeClassName={style.isActive}>Sign In</NavLink>
            </li>
            <CartIcon />
          </ul>
        </nav>
      </div>

    </div>
  )
};

export default Header;