// import videoGame from "../../assets/video3.mp4"
import React from "react";
import { Link } from "react-router-dom";
import imageFolder from "../../imageFolder/img1.jpeg";
import "./home.css";
import Footer from "../Footer";
import GetInTouch from "../GetInTouch";
import CreatePost from "../CreatePost";
import Playwithease from "../Playwithease";
import Futureart from "../Futureart";
import Aceinvestor from "../Aceinvestor";
import Ourplatform from "../Ourplatform"

export const Home = () => {
  return (
    <>
      <div className="group">
        <iframe
          // style={{marginLeft:"25%"}}
          width="50%"
          height="50%"
          title="video"
          src="https://www.youtube.com/embed/Gn8KabKXG9o"
        ></iframe>
        <br></br>
        <br></br>
        <div className=" get">
          <div className="butt">Get Started</div>
          <Link to="/">
            <div>Learn More.....</div>
          </Link>
        </div>
        <br></br>
        <br></br>
    
          <div className="land1">
            <div className="play1">
              <div>Daily</div>
              <div className="poffs1">Playoffs</div>
            </div>
            <div className="imgplay1">
              <div className="folder1para1">
                <p>
                  FundU provides a simulated environment to traders for
                  different markets. Games have been designed for different user
                  segments to compete. Apply your market knowledge to test with
                  real time simulation games. Compete with your peers, perform
                  and sharpen your trading skills. Get a chance to earn by
                  maximising your profits
                </p>
                <div className="pnow">Play Now</div>
              </div>
              <div className="folder1para2">
                <img className="img1" src={imageFolder} alt="" />
              </div>
              </div>
       

        <Playwithease /> 
          <CreatePost />
           <Futureart />
        <Aceinvestor />
        
       <Ourplatform />
     
        </div>
        </div>

      {/* <GetInTouch />
      <Footer /> */}
    </>

  );
};
export default Home;
