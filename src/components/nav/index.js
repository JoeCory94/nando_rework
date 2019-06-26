import React from 'react';
import { Link } from 'gatsby';
import logo from '../../images/N&O_Logo_Dark_Blue_Full_Logo.png';
import './nav.scss';

const Nav = () => (
  <nav>
    <div className="nav__wrapper">
      <a className="nav__item--logo" href="/"><img src={ logo } className="logo"></img></a>
      <div className="nav__items nav__main">
        <a href="/">work</a>
        <a href="/">about</a>
        <a href="/">blog</a>
        <a href="/">contact</a>
      </div>
      <div className="nav__items nav__sub">
        <a href="/">start a project</a>
      </div>
    </div>
  </nav>
)


export default Nav
