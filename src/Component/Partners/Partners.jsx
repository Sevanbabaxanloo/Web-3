import React, { useState, useEffect } from "react";
import { LuArrowDownRight } from "react-icons/lu";
import "./Partners.css";
import img1 from "../../img/1.gif";
import img2 from "../../img/2.gif";
import img3 from "../../img/3.gif";

const Partners = () => {
  const [rotationAngle1, setRotationAngle1] = useState(-45);
  const [rotationAngle2, setRotationAngle2] = useState(-45);

  useEffect(() => {
    function handleResize() {
      const box1Width = document.querySelector(
        ".Partners_animation-cont"
      ).offsetWidth;
      const newAngle1 = -Math.atan(500 / box1Width) * (-180 / Math.PI);
      setRotationAngle1(newAngle1);

      const box2Width = document.querySelector(
        ".Partners_animation-cont1"
      ).offsetWidth;
      const newAngle2 = -Math.atan(500 / box2Width) * (180 / Math.PI);
      setRotationAngle2(newAngle2);
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="Partners_container" id="partners">
      <div className="Partners">
        <div className="Partners_title-container">
          <div className="Partners_title">
            <span>
              <LuArrowDownRight className="Partners_title-span" />
            </span>
            <h1 className="Partners_title-text">OUR PARTNERS</h1>
          </div>
        </div>
        <div className="Partners_animation-cont">
          <img src={img1} className="Partners_gif"></img>
          <div
            className="animation_container-RL"
            style={{
              transformOrigin: "bottom left",
              transform: `rotate(${rotationAngle1}deg)`,
            }}
          >
            <div className="running_animation">
              <div className="text_animation">
                <h1 className="running_animation-text">KIROKAZE</h1>
              </div>
              <div className="text_animation">
                <h1 className="running_animation-text">KIROKAZE</h1>
              </div>
              <div className="text_animation">
                <h1 className="running_animation-text">KIROKAZE</h1>
              </div>
              <div className="text_animation">
                <h1 className="running_animation-text">KIROKAZE</h1>
              </div>
              <div className="text_animation">
                <h1 className="running_animation-text">KIROKAZE</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="Partners_animation-cont1">
          <img src={img2} className="Partners_gif"></img>
          <div
            className="animation_container-LR"
            style={{ transform: `rotate(${rotationAngle2}deg)` }}
          >
            <div className="running_animation">
              <div className="text_animation">
                <h1 className="running_animation-text1">JUNGLE</h1>
              </div>
              <div className="text_animation">
                <h1 className="running_animation-text1">JUNGLE</h1>
              </div>
              <div className="text_animation">
                <h1 className="running_animation-text1">JUNGLE</h1>
              </div>
              <div className="text_animation">
                <h1 className="running_animation-text1">JUNGLE</h1>
              </div>
              <div className="text_animation">
                <h1 className="running_animation-text1">JUNGLE</h1>
              </div>
              <div className="text_animation">
                <h1 className="running_animation-text1">JUNGLE</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="Partners_animation-cont">
          <img src={img3} className="Partners_gif"></img>
          <div
            className="animation_container-RL"
            style={{
              transformOrigin: "bottom left",
              transform: `rotate(${rotationAngle1}deg)`,
            }}
          >
            <div className="running_animation">
              <div className="text_animation">
                <h1 className="running_animation-text">THE MAXI</h1>
              </div>
              <div className="text_animation">
                <h1 className="running_animation-text">THE MAXI</h1>
              </div>
              <div className="text_animation">
                <h1 className="running_animation-text">THE MAXI</h1>
              </div>
              <div className="text_animation">
                <h1 className="running_animation-text">THE MAXI</h1>
              </div>
              <div className="text_animation">
                <h1 className="running_animation-text">THE MAXI</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
