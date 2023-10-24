import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import "./Mobilemenu.css";

const Mobilemenu = () => {
  const toggleClosingMobileMenu = () => {
    const Close = document.querySelector(".mobilemenu");
    Close.style.display = "none";
  };

  return (
    <div className="mobilemenu">
      <div className="mobilemenu_side">
        <div className="mobilemenu_container">
          <div className="mobilemenu_side-lable">
            <h1 className="mobilemenu_side-lable-text">WEBTHREE</h1>
            <h1 className="mobilemenu_side-lable-text">WEBTHREE</h1>
            <h1 className="mobilemenu_side-lable-text">WEBTHREE</h1>
            <h1 className="mobilemenu_side-lable-text">WEBTHREE</h1>
          </div>
          <div className="mobilemenu_header">
            <div className="mobilemenu_header_container">
              <div className="mobilemenu_header_logo">
                <a className="mobilemenu_logo">
                  <p className="mobilemenu_logo-text">
                    WEBTHREE
                    <span className="mobilemenu_logo-span">®</span>
                  </p>
                </a>
              </div>
              <div className="mobilemenu_header_close">
                <AiOutlineClose onClick={toggleClosingMobileMenu} />
              </div>
            </div>
            <div className="mobilemenu_div-container">
              <div className="mobilemenu_div">
                <div
                  className="mobilemenu_elements"
                  onClick={toggleClosingMobileMenu}
                >
                  <a href="#home" className="mobilemenu_items">
                    <span className="mobilemenu_color-number">01</span>
                    HOME
                  </a>
                </div>
                <div
                  className="mobilemenu_elements"
                  onClick={toggleClosingMobileMenu}
                >
                  <a href="#services" className="mobilemenu_items">
                    <span className="mobilemenu_color-number">02</span>
                    SERVICES
                  </a>
                </div>
                <div
                  className="mobilemenu_elements"
                  onClick={toggleClosingMobileMenu}
                >
                  <a href="#partners" className="mobilemenu_items">
                    <span className="mobilemenu_color-number">03</span>
                    PARTNERS
                  </a>
                </div>
                <div
                  className="mobilemenu_elements"
                  onClick={toggleClosingMobileMenu}
                >
                  <a href="#clients" className="mobilemenu_items">
                    <span className="mobilemenu_color-number">04</span>
                    CLIENTS
                  </a>
                </div>
                <div
                  className="mobilemenu_elements"
                  onClick={toggleClosingMobileMenu}
                >
                  <a href="#contact" className="mobilemenu_items">
                    <span className="mobilemenu_color-number">05</span>
                    CONTACT
                  </a>
                </div>
              </div>
            </div>
            <div className="mobilemenu_footer">
              <div className="mobilemenu_footer-container">
                <h1 className="mobilemenu_footer-text">
                  <span className="text-color">/</span>© WEBTHREE 2022
                </h1>
              </div>
              <div className="mobilemenu_footer-twitterIcon">
                <a href="https://twitter.com/callumrnoble">
                  <img
                    className="twitterIcon"
                    src="https://uploads-ssl.webflow.com/625416e0a64e0c6895f79107/626fcc6252006a9d0186c6c3_Twitter-icon.svg"
                    alt="logo"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobilemenu;
