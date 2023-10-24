import React from "react";
import { LuArrowDownRight } from "react-icons/lu";
import "./Services.css";
import eye from "../../img/eye2.mp4";

const Services = () => {
  const hover = () => {
    const container = document.querySelector(".scale_project-btn");
    const text = document.querySelector(".scale_project-btn-text");

    container.addEventListener("mouseover", () => {
      text.style.color = "black";
    });
    container.addEventListener("mouseleave", () => {
      text.style.color = "#dcdcdc";
    });
  };
  return (
    <div className="services_first-container" id="services">
      <div className="services_second-container">
        <div className="services_third-container">
          <div className="services_fourth-container">
            <div className="services_text-container">
              <span>
                <LuArrowDownRight className="services_arrow" />
              </span>
              <h1 className="services_text">OUR SERVICES</h1>
            </div>
          </div>
        </div>
        <div className="service_line-container">
          <div className="first_row">
            <div>
              <div className="service-container">
                <h1 className="service_logo">
                  S <span>/</span> 1
                </h1>
                <h1 className="service_title">AUDITING</h1>
                <p className="service_text">
                  Our team will perform a full audit on your smart contract to
                  ensure all security measures have been carried out efficiently
                  and effectively before launch. We will then break down any
                  issues we may find into a written report, which we will then
                  review in depth with your team.
                </p>
                <div className="service_blinking-img-container">
                  <div className="service_blinking-img1"></div>
                </div>
              </div>
            </div>
            <div className="service-container">
              <div className="service-container">
                <h1 className="service_logo">
                  S <span>/</span> 4
                </h1>
                <h1 className="service_title">CONSULTING</h1>
                <p className="service_text">
                  We offer consulting on every stage of your project, from the
                  beginning, all the way to the mint, even providing post mint
                  support for clients. Our staff have launched their own
                  successful projects, therefore we are qualified to advise you
                  along your journey.
                </p>
                <div className="service_blinking-img-container">
                  <div className="service_blinking-img2"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="second_row">
            <div className="service-container">
              <h1 className="service_logo">
                S <span>/</span> 2
              </h1>
              <h1 className="service_title">CONTRACT BUILD</h1>
              <p className="service_text">
                If you're starting a project, finding developers you can trust
                and have a proven track record can be very difficult. Our team
                has worked extremely hard since we opened our doors to become
                the premier brand we are today. Feel free to touch base with us
                and see for yourself why so many choose Web Three.
              </p>
              <div className="service_blinking-img-container">
                <div className="service_blinking-img3"></div>
              </div>
            </div>
            <div className="service-container">
              <h1 className="service_logo">
                S <span>/</span> 5
              </h1>
              <h1 className="service_title">WEBSITE BUILD</h1>
              <p className="service_text">
                You'll be pleased to know that we offer website design and
                development to help kickstart your project with a site that you
                and your community loves. Your first impression matters, so
                let's make sure you have a website that instills trust straight
                away.
              </p>
              <div className="service_blinking-img-container">
                <div className="service_blinking-img4"></div>
              </div>
            </div>
          </div>
          <div className="third_row">
            <div className="service-container">
              <h1 className="service_logo">
                S <span>/</span> 3
              </h1>
              <h1 className="service_title3">EMERGENCY REBUILD</h1>
              <p className="service_text">
                If for any reason we do find a high risk issue in the contract
                close to your launch, we can assess the situation and offer a
                full rebuild in a timely manner. We have saved several projects
                from their mints failing, and it's a service we have become very
                well known for in the nft community.
              </p>
              <div className="service_blinking-img-container">
                <div className="service_blinking-img5"></div>
              </div>
            </div>
            <div className="service-container">
              <div className="scale_project">
                <h1 className="scale_project-text">
                  <span>/</span>
                  ARE YOU READY TO SCALE YOUR NFT PROJECT?
                </h1>
                <div className="scale_project-eyeanimation">
                  <div className="scale_project-animation">
                    <video
                      src={eye}
                      autoPlay
                      loop
                      muted
                      className="eye-loop"
                    ></video>
                  </div>
                </div>
                <a
                  href="#contact"
                  className="scale_project-btn"
                  onMouseEnter={hover}
                >
                  <h1 className="scale_project-btn-text">get started</h1>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
