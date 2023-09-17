import React from "react";
import "./Contact.css";
import Ellipse from "../assets/Ellipse 1.png";

const Contact = () => {
  return (
    <div>
      <div className="contact">
        <div className="contacts">
          <div>
            <p className="news">Newsletter</p>
            <p className="desc">
              Get news about articles and updates in your inbox.
            </p>
          </div>
          <div className="message">
            <p className="name">Name</p>
            <div className="line7"></div>
            <p className="name">Email</p>
            <div className="line7"></div>
            <p className="name">Message</p>
            <div className="line7"></div>
          </div>
        </div>

        <div className="ellipse">
          <div>
            <h1 className="phone">GET </h1>
            <h1 className="phone">IN TOUCH </h1>
          </div>
          <div className="circle">
            <img src={Ellipse} alt="ellipse" />
          </div>
          <div className="send">SEND</div>
        </div>
      </div>
      <div className="info">
        <p className="reserved">Copyright 2022 All Right Reserved By SG</p>
      </div>
    </div>
  );
};

export default Contact;
