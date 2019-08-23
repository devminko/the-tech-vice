import React, { } from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

import style from './footer.module.scss';

// *************************** FOOTER COMPONENT *************************** //
const Footer = () => {
  return (
    <div className={style.footer}>
      
      <div className={style.logoContainer}>
        <span className={style.logo}><Link to='/'>TechVice</Link></span>
      </div>

      <div className={style.linksContainer}>
        <div className={style.links}>
          <span className={style.title}>Who We Are</span>
          <span>
            <Link to='/' className={style.link}>About Us</Link>
          </span>
        </div>

        <div className={style.links}>
          <span className={style.title}>Work With Us</span>
          <span>
            <Link to='/' className={style.link}>Your Brand</Link>
          </span>
        </div>

        <div className={style.links}>
          <span className={style.title}>Who We Are</span>
          <span>
            <Link to='/' className={style.link}>About Us</Link>
          </span>
        </div>

        <div className={style.links}>
          <span className={style.title}>Help Desk</span>
          <span>
            <Link to='/' className={style.link}>Contact Us</Link>
          </span>
        </div>

        <div className={style.socialLinks}>
          <span className={style.title}>Our Socials</span>
          <div className={style.icons}>
          <a href='https://www.instagram.com/thetechfiend/' target='_blank' rel='noopener noreferrer'>
            <FaInstagram className={style.instagram}/>
          </a>
          <a href='https://twitter.com/fiend_tech' target='_blank' rel='noopener noreferrer'>
            <FaTwitter className={style.twitter}/>
          </a>
          <a href='https://www.youtube.com/channel/UCIsCsQKH6oRy0uiTSUnV9Lg?view_as=subscriber' target='_blank' rel='noopener noreferrer'>
            <FaYoutube className={style.youtube}/>
          </a>
        </div>
        </div>
      </div>

    </div>
  )
};

export default Footer;