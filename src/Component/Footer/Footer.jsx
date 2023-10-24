import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="GetStarted_bottomborder">
        <div className="GetStarted_logo-container-border">
          <div className="GetStarted_logo-container">
            <h1 className="GetStarted_logo"> WEBTHREE</h1>
          </div>
        </div>
      </div>
      <div className="footer_container">
        <div className="footer">
          <h1 className="footer_color">
            <span className="color">/</span>© WEBTHREE 2022
          </h1>
        </div>
        <div>
          <a href="https://twitter.com/callumrnoble">
            <h1 className="footer_color">
              <spam className="color">/</spam>
              SITE BY CALLUM NOBLE
            </h1>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
