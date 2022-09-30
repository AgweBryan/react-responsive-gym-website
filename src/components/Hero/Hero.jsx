import React from "react";
import { Header } from "../Header/Header";
import "./style/hero.css";

export const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__left">
        <Header />
        {/* the best ad start */}
        <div className="the-best-ad">
          <div></div>
          <span>the best fitness club in town</span>
        </div>
        {/* The best ad end */}

        {/* Hero heading start */}
        <div className="hero__left--text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>
              In here we will help you to shape and live up your life to it's
              fullest
            </span>
          </div>
        </div>
        {/* Hero heading end */}

        {/* Numbers start */}
        <div className="hero__left--figures">
          <div>
            <span>+140</span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>+978</span>
            <span>members joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>fitness progress</span>
          </div>
        </div>
        {/* Numbers end */}

        {/* hero buttons start */}
        <div className="hero__left--buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
        {/* hero buttons end */}
      </div>
      <div className="hero__right">Right Side</div>
    </div>
  );
};
