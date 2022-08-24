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
import Startslider from "../Startslider";
import Slider from "../Slide";
import Fundu from "../Fundugrowing";
import Lovelyuser from "../Lovelyuser";
export const Home = () => {
  return (
    <>
      <div className="group">
      <Startslider />
        <br></br>
        <br></br>

        <br></br>
        <Playoff />
        <br></br>
        <br></br>
        <br></br>

     <Slider />
     <br></br>
     <br></br>
     <Fundu />

        {/* <CreatePost /> */}
        <Futureart />
        <Card />
<Lovelyuser />
        <Ourplatform />
        <GetInTouch />
        <Footer />
      </div>
    </>
  );
};
export default Home;