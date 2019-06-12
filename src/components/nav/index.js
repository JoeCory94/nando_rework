import React from 'react';
import { Link } from 'gatsby';
import logo from '../../images/N&O_Logo_Dark_Blue_Full_Logo.png';
import './nav.css';

const Nav = () => (
  <nav>
  <div className="nav__wrapper">
  <a className="nav__item--logo" href="/"><img src={ logo } className="logo"></img></a>
  <div className="nav__items">

  </div>
  
  </div>
  </nav>
)

export default Nav
