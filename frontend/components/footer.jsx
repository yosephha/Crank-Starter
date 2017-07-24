import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <div className='footer-container'>
    <div className='inner-footer-container'>
      <div>
        <Link to="/" className="nav-bar-logo site-nav__item footer-logo-container">
          <span id="logo">
            <span className="footer-logo">Crank</span>
            <span className="crank">starter</span>
          </span>
          <br />
        </Link>
        <div className="cpr-txt">Copyright © 2017 Crankstarter. All rights reserved.</div>
      </div>

      <ul>
        <li>
          <a target="_blank" href="https://github.com/yosephha" className="icon fa-linkdin">
          <i className="devicon-github-plain"></i>
          </a>
        </li>

        <li>
          <a target="_blank" href="https://www.linkedin.com/in/yoseph-habtewold-b7625881" className="linkedin-link">
          <i className="fa fa-linkedin" aria-hidden="true"></i>
          </a>
        </li>

        <li>
          <a target="_blank" href="mailto:yoseph.habtewold@gmail.com">
            <i className="fa fa-envelope-o" aria-hidden="true"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default Footer;
