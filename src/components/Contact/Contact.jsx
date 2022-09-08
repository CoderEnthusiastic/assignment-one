import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <div className="box">
        <div className="name">
          <h4>Name</h4>
          <input id="abc" type="text" placeholder="Enter Name" />
        </div>
        <div className="surname">
          <h4>Last Name</h4>
          <input id="abc" type="text" placeholder="Last Name" />
        </div>
      </div>
        <div className="email">
        <h4>Email</h4>
        <input type="text" placeholder="Enter Email" />
        </div>
        <div className="message">
            <h4>Message</h4>
            <input id="textmessage" type="text" placeholder="Enter Message" />
        </div>
        <button id="contact">Contact Us</button>
    </div>
  );
};

export default Contact;
