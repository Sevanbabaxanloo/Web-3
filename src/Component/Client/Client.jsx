import React, { useState } from "react";
import { LuArrowDownRight, LuArrowRight, LuArrowLeft } from "react-icons/lu";
import "./Client.css";
import top from "../../img/top.svg";
import bottom from "../../img/bottom.svg";
import dino from "../../img/dino.gif";
import monile from "../../img/mobile.gif";
import video from "../../img/key.gif";
import bug from "../../img/bug.png";
import coroco from "../../img/coroco.gif";
import cyp from "../../img/cyp.png";
import monkey from "../../img/monkey.jpeg";
import pro from "../../img/pro.png";
import red from "../../img/red.jpeg";
import anero from "../../img/anero.jpeg";

const Client = () => {
  const [currentIndex, setCurrentIndex] = useState(3);

  const images = [
    bug,
    pro,
    monkey,
    red,
    coroco,
    cyp,
    dino,
    video,
    monile,
    anero,
  ];

  const displayedImages = [
    images[(currentIndex + 3) % images.length],
    images[(currentIndex + 4) % images.length],
    images[(currentIndex + 5) % images.length],
  ];

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevCard = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };
  return (
    <div className="client" id="clients">
      <div className="client_container-margin">
        <div className="client_container">
          <div className="client_text-container">
            <span>
              <LuArrowDownRight className="client_arrow" />
            </span>
            <h1 className="client_text">PREVIOUS CLIENTS</h1>
          </div>
        </div>
        <div className="main">
          <div>
            <img src={top} className="client_topcover" />
            <div className="cards-container">
              {displayedImages.map((img, index) => (
                <div key={index} className="card">
                  <img src={img} alt={`Card ${index + 2}`} />
                  {index === 0 && <div className="filterL"></div>}
                  {index === 2 && <div className="filterR"></div>}
                </div>
              ))}
            </div>
            <img src={bottom} className="client_bottomcover" />
          </div>
        </div>
        <div className="buttons">
          <button className="button" onClick={prevCard}>
            <span className="color_symbol-arrowL">
              <LuArrowLeft />
            </span>
            PREV <span className="color_symbol">\</span>
          </button>
          <button className="button" onClick={nextCard}>
            <span className="color_symbol">/</span> NEXT{" "}
            <span className="color_symbol-arrowR">
              <LuArrowRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Client;
