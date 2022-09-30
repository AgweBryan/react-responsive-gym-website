import React from "react";
import "./style/program.css";
import { programsData } from "../../data/programsData";
import RightArrow from "../../assets/rightArrow.png";

export const Program = () => {
  return (
    <div className="programs" id="programs">
      {/* header start */}
      <div className="programs__header">
        <span className="stroke-text">Explore our</span>
        <span>Programs</span>
        <span className="stroke-text">to shape you</span>
      </div>
      {/* header end */}

      <div className="programs__categories">
        {programsData.map((program) => (
          <div className="programs__categories--category">
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now">
              <span>Join Now</span>
              <img src={RightArrow} alt="right arrow" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
