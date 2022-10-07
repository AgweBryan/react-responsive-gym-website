import React from "react";
import { Header } from "../Header/Header";
import "./style/hero.css";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import { motion } from "framer-motion";

export const Hero = () => {
  const transition = { type: "spring", duration: 2 };
  return (
    <div className="hero">
      <div className="blur hero__blur"></div>
      <div className="hero__left">
        <Header />
        {/* the best ad start */}
        <div className="the-best-ad">
          <motion.div
            initial={{ left: "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
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
      {/* hero left end */}

      {/* hero right start */}
      <div className="hero__right">
        <button className="btn">Join Now</button>
        {/* heart rate start */}
        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="hero__right--heart-rate"
        >
          <img src={Heart} alt="heart" />
          <span>Heart Rate</span>
          <span>116 bps</span>
        </motion.div>
        {/* heart rate end */}
        {/* hero images start */}
        <img
          src={hero_image}
          alt="hero image"
          className="hero__right--hero-image"
        />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
          src={hero_image_back}
          alt="hero image back"
          className="hero__right--hero-image-back"
        />
        {/* hero images end */}

        {/* calories start */}
        <motion.div
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
          className="hero__right--calories"
        >
          <img src={Calories} alt="calories" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
        {/* calories end */}
      </div>
    </div>
  );
};
