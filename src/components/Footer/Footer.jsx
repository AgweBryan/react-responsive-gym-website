import React from "react";
import "./style/footer.css";
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";

export const Footer = () => {
  return (
    <div className="footer-container">
      <hr />
      <div className="footer">
        <div className="footer__social-links">
          <img src={Github} alt="github" />
          <img src={Instagram} alt="instagram" />
          <img src={LinkedIn} alt="linkedin" />
        </div>
        <div className="footer__logo">
          <img src={Logo} alt="logo" />
        </div>
      </div>
    </div>
  );
};
