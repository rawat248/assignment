import React from "react";
import "./Layout.css";
import Navbar from "./Navbar";
import boy from "../assets/img.png";
import arrow from "../assets/arrow.png";
import star from "../assets/Star 3.png";
import Star from "../assets/Star 4.png";

const Layout = () => {
  return (
    <div className="layout">
      <div className="container">
        <div className="shopKart">ShopKart</div>
        <div className="wishlist">WISHLIST(0)</div>
        <div className="wishlist bag">BAG(0)</div>
      </div>
      <div className="line"></div>
      <Navbar />
      <div className="rectangle1">
        <div className="rectangle"></div>
      </div>

      <h1 className="p6">Fresh </h1>
      <h1 className="p7">2022 </h1>
      <h1 className="p8">Look</h1>

      <div className="star1">
        <img src={star} alt="" className="picture" />
      </div>
      <div className="boy">
        <img src={boy} alt="" className="picture" />
      </div>
      <div className="Jacket">
        <p className="oregon">OREGON JACKET</p>
        <p className="oregon">$124</p>
      </div>

      <div className="line1"></div>
      <div className="star2">
        <img src={Star} alt="star" />
      </div>

      <div className="seemore">
        <div className="p9">See more</div>
        <div>
          <img src={arrow} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Layout;
