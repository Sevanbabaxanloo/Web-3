import React, { useState } from "react";
import { LuArrowDownRight } from "react-icons/lu";
import "./GetStarted.css";

const GetStarted = () => {
  const [formData, setFormData] = useState({
    name: "",
    projectName: "",
    twitter: "",
    email: "",
    message: "",
  });

  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    if (Object.values(formData).some((value) => value.trim() === "")) {
      setMessage("All fields are required");
      setSubmitted(true);
      console.log("fale");
    } else {
      setMessage("Done");
      console.log("done");
    }
  };

  const handleChange = (e, fieldName) => {
    setFormData({ ...formData, [fieldName]: e.target.value });
  };

  return (
    <div className="GetStarted" id="contact">
      <div className="GetStarted_container">
        <div className="GetStarted_text-container">
          <div className="GetStarted_text-cont">
            <span>
              <LuArrowDownRight className="GetStarted_arrow" />
            </span>
            <h1 className="GetStarted_text">GET STARTED</h1>
          </div>
        </div>
        <div className="GetStarted_input-main">
          <div className="GetStarted_input-container">
            <div className="GetStarted_input-containtwo">
              <h1 className="GetStarted_size">
                <span className="GetStarted_number-color">01.</span>
                NAME
              </h1>
              <input
                type="text"
                placeholder="Your name..."
                className="GetStarted-input"
                value={formData.name}
                onChange={(e) => handleChange(e, "name")}
                required
              ></input>
            </div>
            <div className="GetStarted_input-containtwo">
              <h1 className="GetStarted_size">
                <span className="GetStarted_number-color">02.</span>
                PROJECT NAME
              </h1>
              <input
                type="text"
                placeholder="Your project name..."
                className="GetStarted-input"
                value={formData.projectName}
                onChange={(e) => handleChange(e, "projectName")}
                required
              ></input>
            </div>
            <div className="GetStarted_input-containtwo">
              <h1 className="GetStarted_size">
                <span className="GetStarted_number-color">03.</span>
                TWITTER
              </h1>
              <input
                type="text"
                placeholder="Your twitter..."
                className="GetStarted-input"
                value={formData.twitter}
                onChange={(e) => handleChange(e, "twitter")}
              ></input>
            </div>
            <div className="GetStarted_input-containtwo">
              <h1 className="GetStarted_size">
                <span className="GetStarted_number-color">04.</span>
                EMAIL
              </h1>
              <input
                type="email"
                placeholder="Your e-mail address..."
                className="GetStarted-input"
                value={formData.email}
                onChange={(e) => handleChange(e, "email")}
                required
              ></input>
            </div>
            <div className="GetStarted_input-containtwo">
              <h1 className="GetStarted_size">
                <span className="GetStarted_number-color">05.</span>
                MESSAGE
              </h1>
              <textarea
                placeholder="Your message..."
                className="GetStarted-input-last"
                value={formData.message}
                onChange={(e) => handleChange(e, "message")}
              ></textarea>
            </div>
          </div>
          <div>
            <div className="button_logo">
              <div className="GetStarted_button-container">
                <button className="GetStarted_button" onClick={handleSubmit}>
                  SEND ENQUIRY
                </button>
              </div>
              <div className="error-fild">{message}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
