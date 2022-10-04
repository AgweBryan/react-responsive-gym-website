import React from "react";
import "./style/plans.css";
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";

export const Plans = () => {
  return (
    <div className="plans_section">
      {/* Plans header start */}
      <div className="plans_section__plans-header">
        <span className="stroke-text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="stroke-text">NOW WITH US</span>
      </div>
      {/* Plans header end */}

      {/* plans card start */}
      <div className="plans_section__plans">
        {plansData.map((plan, i) => {
          return (
            <div className="plan" key={i}>
              {plan.icon}
              <span>{plan.name}</span>
              <span>$ {plan.price}</span>

              <div className="plan__features">
                {plan.features.map((feature, i) => {
                  return (
                    <div className="plan__features--feature">
                      <img src={whiteTick} alt="white tick" />
                      <span key={i}>{feature}</span>
                    </div>
                  );
                })}
              </div>
              <div>
                <span>See more benefits</span>
              </div>
              <button className="btn">Join now</button>
            </div>
          );
        })}
      </div>
      {/* plans card end */}
    </div>
  );
};
