import React from "react";
import "./style/header.css";
import Logo from "../../assets/logo.png";

export const Header = () => {
  return (
    <div className="header">
      <img src={Logo} alt="logo" className="header__logo" />
      <ul className="header__menu">
        <li>Home</li>
        <li>Programs</li>
        <li>Why us</li>
        <li>Plans</li>
        <li>Testimonials</li>
      </ul>
    </div>
  );
};
