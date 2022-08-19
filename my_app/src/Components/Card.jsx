import React from "react";
import imageFolder3 from "../imageFolder/mobile.jpeg";
import imageFolder1 from "../imageFolder/img2.jpeg";
import imageFolder2 from "../imageFolder/img3.jpeg";
import "./card.css";

export const Card = () => {
  return (
    <div className="manish_div">
      <div className="future1">
        <div className="f2">Become an</div>
        <div className="f2">
          {" "}
          <span className="span1t">ace investor </span>today
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <div className="ashu1">
        <div>
          <img className="img1ashu" src={imageFolder3} alt="" />
        </div>
        <div>
          <img className="img1ashu" src={imageFolder1} alt="" />
        </div>
        <div>
          <img className="img1ashu" src={imageFolder2} alt="" />
        </div>
        <div>
          <div className="box1tarz">
            <h2 className="h2helppossible">Helping you clean</h2>
            <p className="h2helppossible">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              velit quis mollitia, optio recusandae nam accusantium
              {/* expedita unde dicta perferendis voluptatum  */}
            </p>
          </div>
        </div>
        <div>
          <div className="box1tarz">
            <h2 className="h2helppossible">
              ACCESSIBILTY ON YOUR FIMGERPRINTS
            </h2>
            <p className="h2helppossible">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              velit quis mollitia, optio recusandae nam accusantium
            </p>
          </div>
        </div>
        <div>
          <div className="box1tarz">
            <h2 className="h2helppossible">CROWDSOURSE YOUR WISDOM</h2>
            <p className="h2helppossible">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
              velit quis mollitia, optio recusandae nam accusantium
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
