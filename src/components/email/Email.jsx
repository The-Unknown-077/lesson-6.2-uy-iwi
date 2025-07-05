import React from "react";
import "./Email.css";

const Email = () => {
  return (
    <section className="email" id="contact">
      <div className="container">
        <div className="email_wrapper">
          <div className="p_title_box">
            <p className="e_p_title">Stay in Touch</p>
          </div>
          <div className="input">
            <input type="text" placeholder="Enter your email address" />
            <button className="input_btn">Submit</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Email;
