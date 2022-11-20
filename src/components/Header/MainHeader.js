import React from "react";
import {Link} from 'react-router-dom';

const MainHeader = () => {
  return (
    <header className="header container">
      <nav className="nav">
        <ul className="nav__pages">
          <li>
            <Link to="/" className="text-no-decoration">ANA SAYFA</Link>
          </li>
          <li>
            <Link to="/about" className="text-no-decoration">ÇGK KİMDİR?</Link>
          </li>
          <li>
            <Link to="/sehirler" className="text-no-decoration">ŞEHİRLER</Link>
          </li>
          <li>
            <Link to="/haberler" className="text-no-decoration">HABERLER</Link>
          </li>
        </ul>
        <ul className="nav__social">
            <li>
                <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">FACEBOOK</a>
            </li>
            <li>
                <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">INSTAGRAM</a>
            </li>
            <li>
                <a href="https://twitter.com/home" target="_blank" rel="noreferrer">TWITTER</a>
            </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
