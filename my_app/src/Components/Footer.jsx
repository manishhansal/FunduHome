import React from "react";
import "./Footer.css";
import google from "../assests/google-play.png";
import apple from "../assests/apple.png";
import logo from "../assests/funduL.png";

const content1 = ["Menu", "Home", "Marketplace", "Homeworks", "Newinsights"];
const content2 = [
  "Technology",
  "Documentation",
  "Reverse",
  "Security Audits",
  "Waitepaper",
];
const content3 = [
  "Our company",
  "About Us",
  "Contact Us",
  "Community",
  "Investor Relation",
];
const Footer = () => {
  return (
    <div className="footer_main">
      <div className="footer_div">
        <div className="footer_left">
          <div className="footer_logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="footer_logo_content1">
            <p>
              A powerful cryptocurrency exchange in your pocket. Buy, sell and
              trade crypto on the go.
            </p>
          </div>
          <div className="footer_logo_content2">
            <p>Get the Cryptolly Wallet Mobile App Now!</p>
          </div>
          <div className="footer_download">
            <div>
              <div className="footer_download_google">
                <img src={google} alt="google" />
                <div>
                  <p>
                    GET IT ON <br />
                    Google Play
                  </p>
                </div>
              </div>
              <div className="footer_download_apple">
                <img src={apple} alt="apple" />
                <div>
                  <p>
                    Download on the <br />
                    Apple Store
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_right">
          <div className="content1">
            <ul>
              {content1.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="content2">
            <ul>
              {content2.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="content3">
            <ul>
              {content3.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="footer_bottom">
        <div className="footer_bottom_left">
          <p>Cryptolly ©. All rights reserved.</p>
        </div>
        <div className="footer_bottom_right">
          <p>Term of Service</p>
          <hr />
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
