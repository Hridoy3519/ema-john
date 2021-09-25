import React from "react";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <div className="banner">
        <img src={logo} alt="" />
      </div>
      <nav>
        <ul>
          <li>
            <a href="/Shop">Shop</a>
          </li>
          <li>
            <a href="/Order">Order Review</a>
          </li>
          <li>
            <a href="/Inventory">Manage Inventory Here</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
