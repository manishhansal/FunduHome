// import videoGame from "../../assets/video3.mp4"
import React from "react";
import { Link } from "react-router-dom";
// import imageFolder from "../../imageFolder/img1.jpeg";
import "./home.css";
import Footer from "../Footer/Footer";
import GetInTouch from "../GetInTouch";
import CreatePost from "../CreatePost";
import Playwithease from "../Playwithease";
import Futureart from "../Futureart";
// import Aceinvestor from "../Aceinvestor";
import Ourplatform from "../Ourplatform";
import Card from "../Card";
import Playoff from "../Playoff";
export const Home = () => {
  return (
    <>
      <div className="group">
        <iframe
          width="50%"
          height="500px"
          title="video"
          src="https://www.youtube.com/embed/Gn8KabKXG9o"
        ></iframe>
        <br></br>
        <br></br>
        <div className="get">
          <div className="butt">Get Started</div>
          <Link to="/">
            <div>Learn More.....</div>
          </Link>
        </div>
        <br></br>
        <br></br>

        <br></br>
        <Playoff />
        <Playwithease />

        <CreatePost />
        <Futureart />
        <Card />

        <Ourplatform />
        <GetInTouch />
        <Footer />
      </div>
    </>
  );
};
export default Home;