import React from "react";
import "./Header.css";
import car from "../assets/l.png";
import facebook from "../assets/Vector.png";
import linkedin from "../assets/Vector1.png";
import twitter from "../assets/Vector2.png";
import insta from "../assets/Vector3.png";

const Header = () => {
  return (
    <div className="header">
      <div className="layer">
        <img src={car} alt="delivery" className="car" />
      </div>
      <p className="p">Free Delivery</p>
      <p className="p1">|</p>
      <p className="p2">Return Policy</p>
      <p className="p3">Login</p>
      <p className="p4">Follow US</p>
      <p className="p5">
        <img src={facebook} alt="" />
      </p>
      <p className="p5">
        <img src={linkedin} alt="" />
      </p>
      <p className="p5">
        <img src={twitter} alt="" />
      </p>
      <p className="p5">
        <img src={insta} alt="" />
      </p>
    </div>
  );
};

export default Header;
