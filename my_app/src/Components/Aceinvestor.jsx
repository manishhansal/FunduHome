import React from "react";

import "./ace.css";
import imageFolder1 from "../imageFolder/img2.jpeg";
import imageFolder2 from "../imageFolder/img3.jpeg";
import imageFolder3 from "../imageFolder/mobile.jpeg";


export const Aceinvestor= () => {
 
  return (

      <div className="mainDiv">
   <div className="bcome1">
            <div className="future1">
              <div className="f2">Become an</div>
              <div className="f2">
                {" "}
                <span className="span1t">ace investor </span>today
              </div>
            </div>
            <div className="sixdiv">
              <div>
                <img className="img1" src={imageFolder1} alt="" />
              </div>
              <div>
                <img className="img1" src={imageFolder2} alt="" />
              </div>
              <div>
                <img className="img1" src={imageFolder3} alt="" />
              </div>
              <div className="box1t">
                <h2 className="h2help">HELPING YOU CLEAN</h2>
                <p className="h1help">
                  Curated market data and news from 10 exchange Beginners'
                  guides and video Certifacation cource designed by industry
                 
                </p>
              </div>
              <div className="box1t">
                <h2 className="h2help">CROWDSOURSE YOUR WISDOM</h2>
                <p className="h1help">
                  Curated market data and news from 10 exchange Beginners'
                  guides and video Certifacation cource designed by industry
                 
                </p>
              </div>
              <div className="box1t">
                <h2 className="h2help">ACCESSIBILTY ON YOUR FIMGERPRINTS</h2>
                <p className="h1help">
                  Curated market data and news from 10 exchange Beginners'
                  guides and video Certifacation cource designed by industry
      
                </p>
              </div>
            </div>
          </div>
   
      </div>

     
  );
};
export default Aceinvestor;

