import React, { useRef } from "react";
import "./style/join.css";

export const Join = () => {
  return (
    <div className="join" id="join-us">
      <div className="join__left">
        <hr />
        <div>
          <span className="stroke-text">READY TO </span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY </span>
          <span className="stroke-text"> WITH US</span>
        </div>
      </div>
      <div className="join__right">
        <form className="email-container">
          <input
            type="email"
            name="user_email"
            placeholder="Enter your Email address..."
          />
          <button className="btn btn-join">Join Now</button>
        </form>
      </div>
    </div>
  );
};
