import React from "react";
import "./play.css";

import imageFolder from "../imageFolder/img1.jpeg";
export const Playoff = () => {
  return (
    <div className="land1">
      <div className="play1">
        <div>Daily</div>
        <div className="poffs1">Playoffs</div>
      </div>
      <div className="imgplay1">
        <div className="folder1para1">
          <p>
            FundU provides a simulated environment to traders for different
            markets. Games have been designed for different user segments to
            compete.
          </p>
          <div className="pnow">Play Now</div>
        </div>
        <div className="folder1para2">
          <img className="img1" src={imageFolder} alt="" />
        </div>
      </div>
    </div>
  );
};
export default Playoff;
