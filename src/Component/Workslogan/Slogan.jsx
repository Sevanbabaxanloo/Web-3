import React from "react";
import "./Slogan.css";

const Slogan = () => {
  return (
    <div className="slogan_main-container">
      <div className="slogan_second-container">
        <div className="slogan_text">
          <div className="slogan_text-container">
            <div className="slogan_text-content">
              <p>
                Our mission is to help ensure the{" "}
                <span className="bold_text"> integrity </span> of the nft space
                continues to thrive by providing clients with a
                <span className="bold_text"> full suite of services </span> to
                assist them with the launch of their projects.
              </p>
            </div>
          </div>
          <div className="slogan_small-text">
            <h1 className="small_text-h1">
              <span className="small_text-span">01.</span>SUPPORTIVE
            </h1>
            <h1 className="small_text-h1">
              <span className="small_text-span">02.</span>PROVEN
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slogan;
