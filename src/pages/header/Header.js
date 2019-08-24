import React, { } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';

import CartIcon from '../../components/cart-icon/CartIcon';

import style from './header.module.scss';

// *************************** HEADER COMPONENT *************************** //
const Header = ({ currentUser }) => {
  // 'currentUser' passed as prop from redux store

  return (
    <div className={style.header}>
    
      <div className={style.logoContainer}>
        <span className={style.logo}><Link to='/' className={style.logoLink}>TechVice</Link></span>
      </div>

      <div className={style.linksContainer}>
        <nav>
          <ul className={style.links}>
            <li>
              <NavLink to='/shop' className={style.link} activeClassName={style.isActive}>Shop</NavLink>
            </li>
            <li>
              <NavLink to='/news' className={style.link} activeClassName={style.isActive}>News</NavLink>
            </li>
            <li>
              <NavLink to='/about' className={style.link} activeClassName={style.isActive}>About Us</NavLink>
            </li>
            <li>
              {
                currentUser
                ? <span onClick={() => auth.signOut()} className={style.link}>Sign Out</span>
                : <NavLink to='/signin' className={style.link} activeClassName={style.isActive}>Sign In</NavLink>
              }
            </li>
            <CartIcon />
          </ul>
        </nav>
      </div>

    </div>
  )
};

// REDUX
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Header);