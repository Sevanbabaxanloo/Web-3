import React from "react";
import "./WellcomeAnimation.css";

const WellcomeAnimation = () => {

  return (
    <div className="wellcome_container-animation-container">
       <div className="animation_container">
        <div className="wellcome_container-animation">
          <div className="wellcome_animation-div">
            <h1 className="wellcome_animation-text">
              WEBTHREE
              <span className="wellcome_animation-text-R">®</span>
            </h1>
          </div>
        </div>
        <div className="wellcome_container-animation-sidecolor"></div>
      </div>
    </div>
  );
};

export default WellcomeAnimation;
