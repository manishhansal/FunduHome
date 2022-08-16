// import videoGame from "../../assets/video3.mp4"
import React from 'react'
import { Link } from 'react-router-dom'
import imageFolder from "../../imageFolder/img1.jpeg"
import "./home.css";

export const Home = () => {

  return (
   

      <div className="group">
        <iframe
          width="50%"
          height="500px"
          src="https://www.youtube.com/embed/Gn8KabKXG9o"
        ></iframe>
        <br></br>
      <br></br>
        <div className=' get'>
      <div className='butt'>Get Started</div>
      <Link to='/'><div>Learn More.....</div></Link>
      </div>
      <br></br>
      <br></br>
      <div>
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

      <div className="mostcre1">
        <div className="mostcre2">
          <div>Most </div>
          <div className="crepost1"> Creative Posts</div>
          <div>By Our Customers</div>
        </div>
        <p className="loremp1">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        sequi unde id velit ipsa ratione aperiam officiis! Quas dignissimos fuga
        soluta dolorum a, tempore neque commodi, ut harum reiciendis libero!
      </p>
      <div>
      <div className="pnow1">Creating a Post</div>
      </div>

      </div>
      </div>
      </div>
      
      


  
  );
};
export default Home;