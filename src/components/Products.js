import React from "react";
import "./Products.css";
import Star2 from "../assets/Star 2.png";
import Arrow1 from "../assets/Arrow 1.png";
import Arrow2 from "../assets/Arrow 2.png";
import z1 from "../assets/z1.png";
import z2 from "../assets/z2.png";
import z3 from "../assets/z3.png";
import z4 from "../assets/z4.png";
import group from "../assets/Group 19.png";

const Products = () => {
  return (
    <div>
      <div className="subheader1">
        <h2 className="subheader">New products</h2>
        <div className="line4">
          <img src={Star2} alt="" />
          <div className="line3"></div>
        </div>
        <div className="arrow">
          <img src={Arrow2} alt="arrow2" className="arrow1" />
          <img src={Arrow1} alt="arrow1" className="arrow2" />
        </div>
      </div>
      <div className="newProducts">
        <div>
          <p className="Apparel">Apparel</p>
          <p className="Apparel1">Accessories</p>
          <p className="Apparel2">Best sellers</p>
          <p className="Apparel3">50% off</p>
        </div>
        <div className="newProduct">
          <div>
            <div className="z1">
              <div>
                <img src={z1} alt="image1" />
              </div>
              <div className="group1">
                <img src={group} alt="image1" />
              </div>
            </div>
            <div className="topic">
              <p className="FLORIDA">FLORIDA JACKET</p>
              <p className="para">
                Lorem, ipsum dolor sit amet consectetur adipisicing.
              </p>
              <p className="rupee">$200</p>
            </div>
          </div>
          <div>
            <div className="z2">
              <div>
                <img src={z2} alt="image1" />
              </div>
              <div className="group2">
                <img src={group} alt="image1" />
              </div>
            </div>
            <div className="topic">
              <p className="FLORIDA">FLORIDA JACKET</p>
              <p className="para">
                Lorem, ipsum dolor sit amet consectetur adipisicing.
              </p>
              <p className="rupee">$200</p>
            </div>
          </div>
          <div>
            <div className="z3">
              <div>
                <img src={z3} alt="image1" />
              </div>
              <div className="group3">
                <img src={group} alt="image1" />
              </div>
            </div>
            <div className="topic">
              <p className="FLORIDA">FLORIDA JACKET</p>
              <p className="para">
                Lorem, ipsum dolor sit amet consectetur adipisicing.
              </p>
              <p className="rupee">$200</p>
            </div>
          </div>
          <div>
            <div className="z4">
              <div>
                <img src={z4} alt="image1" />
              </div>
              <div className="group4">
                <img src={group} alt="image1" />
              </div>
            </div>
            <div className="topic">
              <p className="FLORIDA">FLORIDA JACKET</p>
              <p className="para">
                Lorem, ipsum dolor sit amet consectetur adipisicing.
              </p>
              <p className="rupee">$200</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
