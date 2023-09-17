import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const navigation = [
  { name: "Home", id: "/" },
  { name: "About", id: "/about" },
  {
    name: "Our Products",
    id: "/product",
    child: [{ name: "Product 1", id: "/product/p1" }],
  },
  { name: "Contact Us", id: "/contact" },
];

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="navbar">
      {navigation.map((item) => (
        <ul className="list" key={item.id}>
          <li className="product">
            {item.child ? (
              <div className="dropdown" onClick={toggleDropdown}>
                <Link to={item.id} className="dropdown-title">
                  {item.name}
                </Link>
                {showDropdown && (
                  <ul className="dropdown-menu">
                    {item.child.map((subItem) => (
                      <li key={subItem.id}>
                        <Link to={subItem.id} className="dropdown-title">
                          {subItem.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ) : (
              <Link to={item.id} className="dropdown-title">
                {item.name}
              </Link>
            )}
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Navbar;
