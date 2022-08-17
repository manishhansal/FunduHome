import React from "react";
// import imageFolder from "../imageFolder/img1.jpeg"

export const Landing = () => {
  return (
    <div>
      <div className="land1">
        <div className="play1">
          <div className="pof">Daily</div>
          <div className="poffs1">Playoffs</div>
        </div>
        <div className="imgplay1">
          <div className="folder1para1">
            <p>
              FundU provides a simulated environment to traders for different
              markets. Games have been designed for different user segments to
              compete. Apply your market knowledge to test with real time
              simulation games. Compete with your peers, perform and sharpen
              your trading skills. Get a chance to earn by maximising your
              profits
            </p>
            <div className="pnow">Play Now</div>
          </div>
          <div className="folder1para2">
            <img className="img1" src={imageFolder} alt="" />
          </div>
        </div>
      </div>

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
    </div>
  );
};