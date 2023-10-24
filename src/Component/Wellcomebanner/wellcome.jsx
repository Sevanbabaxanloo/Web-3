import React from "react";
import eye from "../../img/eye.mp4";
import "./wellcome.css";

const Wellcomebanner = () => {
  return (
    <div className="container" id="/">
      <div className="wellcome_text_container">
        <div className="wellcome_container">
          <h1 className="wellcome_text">
            WE HELP <span className="animated_nft">NFT</span>
            <video src={eye} autoPlay muted className="eye_animation"></video>
            <br />
            PROJECTS LAUNCH.
          </h1>
        </div>
      </div>
      <div className="web_short-lines">
        <div className="web_short-info-container">
          <div className="web_short-container">
            <div className="animated_glob"></div>
            <h1 className="web_short-h1">
              <span className="web_short-spancolor">/</span>
              BASED IN UNITED STATES &
              <br />
              WORKING WORLDWIDE
            </h1>
          </div>

          <h1 className="web_short-h1">
            <span className="web_short-spancolor">/</span>
            YEARS OF BLOCK
            <br />
            CHAIN EXPERIENCE
          </h1>
          <h1 className="web_short-h1">
            <span className="web_short-spancolor">/</span>
            ©2022 WEBTHREE
            <br />
            ALL RIGHTS RESERVED
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Wellcomebanner;
