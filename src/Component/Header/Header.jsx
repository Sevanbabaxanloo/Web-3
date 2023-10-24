import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const toggleMobileMenu = () => {
    const mobileMenu = document.querySelector(".mobilemenu");
    mobileMenu.style.display = "block";
  };

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <a href="/">
            <h1 className="header__title">
              WEBTHREE
              <span className="header__title_R">®</span>
            </h1>
          </a>
        </div>
        <div className="header__menu">
          <div className="menu__elements">
            <a href="/" className="menu-items">
              HOME
            </a>
          </div>
          <div className="menu__elements">
            <a href="#services" className="menu-items">
              SERVICES
            </a>
          </div>
          <div className="menu__elements">
            <a href="#partners" className="menu-items">
              PARTNERS
            </a>
          </div>
          <div className="menu__elements">
            <a href="#clients" className="menu-items">
              CLIENTS
            </a>
          </div>
          <div className="menu__elements">
            <a href="#contact" className="menu-items">
              CONTACT
            </a>
          </div>
        </div>
        <div className="header__burger__icon">
          <div className="hamberger_menu">
            <a href="#" onClick={toggleMobileMenu}>
              <div className="menu__burger_topline"></div>
              <div className="menu__burger_bottomline"></div>
            </a>
          </div>
          <a
            href="https://twitter.com/Web3Auditing"
            className="twitterIcon_container"
          >
            <img
              className="twitterIcon"
              src="https://uploads-ssl.webflow.com/625416e0a64e0c6895f79107/626fcc6252006a9d0186c6c3_Twitter-icon.svg"
              alt="logo"
            />
          </a>
        </div>
      </div>
      <div className="bottom_line"></div>
    </header>
  );
};

export default Header;
