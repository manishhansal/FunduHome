// import videoGame from "../../assets/video3.mp4"
import React from "react";
import { Link } from "react-router-dom";
import imageFolder from "../../imageFolder/img1.jpeg";
import imageFolder1 from "../../imageFolder/img2.jpeg";
import imageFolder2 from "../../imageFolder/img3.jpeg";
import imageFolder3 from "../../imageFolder/mobile.jpeg";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AltRouteIcon from "@mui/icons-material/AltRoute";
import DescriptionIcon from "@mui/icons-material/Description";
import "./home.css";
import Footer from "../Footer";
import GetInTouch from "../GetInTouch";
import CreatePost from "../CreatePost";

export const Home = () => {
  return (
    <>
      <div className="group">
        <iframe
          style={{marginLeft:"25%"}}
          width="50%"
          height="500px"
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
        <div>
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

          <CreatePost />
          <div className="there1">
            <div className="future1">
              <div className="f2">
                The <span className="span1t">Future</span> Of Art
              </div>
              <div className="f2">
                {" "}
                <span className="span1t">Technology </span>Is Here
              </div>
            </div>
            <div className="img3div">
              <div>
                <img className="img1" src={imageFolder} alt="" />
              </div>
              <div>
                <p className="lor2">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Cupiditate quasi neque voluptatibus consequuntur aliquid vel,
                  accusamus esse repellat magni quaerat voluptates id. Laborum
                  nihil nesciunt, facilis eos cum deserunt molestias.
                </p>
                <button className="reg1">Register Now</button>
              </div>
            </div>
          </div>
          <div className="material1">
            <div className="calday">
              <div>
                <CalendarTodayIcon /> 3
              </div>
              <div>Day</div>
            </div>
            <div className="calday">
              <div>
                <AccountCircleIcon /> 14
              </div>
              <div>Speakers</div>
            </div>
            <div className="calday">
              <div>
                <AltRouteIcon /> 2
              </div>
              <div>Panel</div>
            </div>
            <div className="calday">
              <div>
                <DescriptionIcon /> 3
              </div>
              <div>Notes</div>
            </div>
          </div>
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
                  experts Simulation for parcticing or computing for rewards.
                </p>
              </div>
              <div className="box1t">
                <h2 className="h2help">CROWDSOURSE YOUR WISDOM</h2>
                <p className="h1help">
                  Curated market data and news from 10 exchange Beginners'
                  guides and video Certifacation cource designed by industry
                  experts Simulation for parcticing or computing for rewards.
                </p>
              </div>
              <div className="box1t">
                <h2 className="h2help">ACCESSIBILTY ON YOUR FIMGERPRINTS</h2>
                <p className="h1help">
                  Curated market data and news from 10 exchange Beginners'
                  guides and video Certifacation cource designed by industry
                  experts Simulation for parcticing or computing for rewards.
                </p>
              </div>
            </div>
          </div>
          <div className="ourPltfm">
            <div className="future1">
              <div className="f2">
                What You Should <span className="span1t">Know</span> About
              </div>
              <div className="f2">
                {" "}
                <span className="span1t">Our Platform </span>
              </div>
              <br></br>

              <div className="threediv">
                <div>
                  <h2 className="thdiv">Getting Started</h2>
                  <p className="p1">what are smallest cases?</p>
                  <p className="p1">Free and Taxes</p>
                  <p className="p1">Can I buy smallcase as a SIP?</p>
                  <p className="p1">How to invest in smallcase?</p>
                </div>
                <div>
                  <h2 className="thdiv">Investing With smallcases</h2>
                  <p className="p1">Watchlist and Draft</p>
                  <p className="p1">Creating your own portfolio</p>
                  <p className="p1">Orders and History</p>
                </div>
                <div>
                  <h2 className="thdiv">Gaming & Events</h2>
                  <p className="p1">Do you get dividennds from smallacases?</p>
                  <p className="p1">Who manages smallcases?</p>
                  <p className="p1">what is reblancing?</p>
                </div>
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
      <div className="there1">
        <div className="future1">
          <div className="f2">
            The <span className="span1t">Future</span> Of Art
          </div>
          <div className="f2">
            {" "}
            <span className="span1t">Technology </span>Is Here
          </div>
        </div>
        <div className="img3div">
          <div>
            <img className="img1" src={imageFolder} alt="" />
          </div>
          <div>
            <p className="lor2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Cupiditate quasi neque voluptatibus consequuntur aliquid vel,
              accusamus esse repellat magni quaerat voluptates id. Laborum nihil
              nesciunt, facilis eos cum deserunt molestias.
            </p>
            <button className="reg1">Register Now</button>
          </div>
      </div>
      </div>
      <div className="material1">
          <div className="calday">
            <div>
              <CalendarTodayIcon /> 3
            </div>
            <div>Day</div>
          </div>
          <div className="calday">
            <div>
              <AccountCircleIcon /> 14
            </div>
            <div>Speakers</div>
          </div>
          <div className="calday">
            <div>
              <AltRouteIcon /> 2
            </div>
            <div>Panel</div>
          </div>
          <div className="calday">
            <div>
              <DescriptionIcon /> 3
            </div>
            <div>Notes</div>
          </div>
        </div>
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
              Curated market data and news from 10 
              exchange Beginners' guides and
               video Certifacation cource designed by
                industry experts Simulation for 
                parcticing or computing for rewards.
              </p>
            </div>
            <div className="box1t">
            <h2 className="h2help">CROWDSOURSE YOUR WISDOM</h2>
              <p className="h1help">
              Curated market data and news from 10 
              exchange Beginners' guides and
               video Certifacation cource designed by
                industry experts Simulation for 
                parcticing or computing for rewards.
              </p>
            </div>
            <div className="box1t">
            <h2 className="h2help">ACCESSIBILTY ON YOUR FIMGERPRINTS</h2>
              <p className="h1help">
              Curated market data and news from 10 
              exchange Beginners' guides and
               video Certifacation cource designed by
                industry experts Simulation for 
                parcticing or computing for rewards.
              </p>
            </div>
          </div>
        </div>
        <div className='ourPltfm'>
        <div className="future1">
          <div className="f2">
            What You Should <span className="span1t">Know</span> About
          </div>
          <div className="f2">
            {" "}
            <span className="span1t">Our Platform </span>
          </div>
          <br></br>
         
          <div className='threediv'>
            <div>
              <h2 className='thdiv'>Getting Started</h2>
              <p className='p1'>what are smallest cases?</p>
              <p className='p1'>Free and Taxes</p>
              <p className='p1'>Can I buy smallcase as a SIP?</p>
              <p className='p1'>How to invest in smallcase?</p>
            </div>
            <div>
              <h2  className='thdiv'>Investing With smallcases</h2>
              <p className='p1'>Watchlist and Draft</p>
              <p className='p1'>Creating your own portfolio</p>
              <p className='p1'>Orders and History</p>
            </div>
            <div>
              <h2  className='thdiv'>Gaming & Events</h2>
              <p className='p1'>Do you get dividennds from smallacases?</p>
              <p className='p1'>Who manages smallcases?</p>
              <p className='p1'>what is reblancing?</p>
            </div>
</div>
</div>
</div>


          </div>
        </div>
      <GetInTouch />
      <Footer />
    </>

  );
};
export default Home;
