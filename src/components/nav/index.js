import React from 'react';
import { Link } from 'gatsby';
import { window } from 'browser-monads';
import logo from '../../images/N&O_Logo_Dark_Blue_Full_Logo.png';
import './nav.css';

const Nav = () => (
  <nav>
  <div className="nav__wrapper">
  <a className="nav__item--logo" href="/"><img src={ logo } className="logo"></img></a>
  <div className="nav__items">
  <Link className={window.location.href.indexOf('work') > 0 ? 'nav__item--link active' : 'nav__item--link'} to='/work'>Work</Link>
  <Link className={window.location.href.indexOf('about') > 0 ? 'nav__item--link active' : 'nav__item--link'} to='/about'>About</Link>
  <Link className={window.location.href.indexOf('blog') > 0 ? 'nav__item--link active' : 'nav__item--link'} to='/blog'>Blog</Link>
  <Link className={window.location.href.indexOf('contact') > 0 ? 'nav__item--link active' : 'nav__item--link'} to='/contact'>Contact</Link>
  </div>
  <Link className={window.location.href.indexOf('contact') > 0 ? 'nav__item--button active' : 'nav__item--button nav__button'} to='/contact'>Contact</Link>
  </div>
  </nav>
)

export default Nav
