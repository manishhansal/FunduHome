import React from "react";
import "./GetInTouch.css";
import name from "../assests/name-card.png";
import email from '../assests/mail.png'

const GetInTouch = () => {
  return (
    <div className="getInTouch_main">
      <div className="getInTouch_left">
        <div className="left_div1">
          <h1>
            Stay get in <br /> <strong>touch</strong> with us
          </h1>
        </div>
        <div className="left_div2">
          <p>
            Join and be the first to get the latest <br /> news about trend,
            promotions, and <br /> much more!
          </p>
        </div>
        <div className="left_div3">Subscribe</div>
      </div>
      <div className="getInTouch_right">
        <label>Your name</label>
              
        <div className="right_input1">
          <img src={name} alt="name" />
          <input type="text" placeholder="Full name here"/>
        </div>
        <label>Your mail</label>
        <div className="right_input1">
          <img src={email} alt="name" />
          <input type="email" placeholder="Your email address"/>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;