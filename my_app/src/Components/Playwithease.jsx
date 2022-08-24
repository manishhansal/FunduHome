import React from "react";
import "./playwithease.css";
import imageFolder from "../imageFolder/img1.jpeg";

export const playwithease = () => {
  return (
    <div className="playease">
      <div className="play2">
        <div className="poffs1">Play</div>
        <div>with Ease</div>
      </div>
      <div className="nifty1">
        <div>
          <img className="img1" src={imageFolder} alt="" />
        </div>
        <div>
          <img className="img1" src={imageFolder} alt="" />
        </div>
        <div>
          <img className="img1" src={imageFolder} alt="" />
        </div>
      </div>
    </div>
  );
};
export default playwithease;
