
import React from "react";
import "./futureart.css";
import imageFolder from "../imageFolder/img1.jpeg";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AltRouteIcon from "@mui/icons-material/AltRoute";
import DescriptionIcon from "@mui/icons-material/Description";

export const future= () => {
 
  return (

      <div className="mainDiv">
       <div className="there1">
            <div className="future1">
              <div className="f2">
                The <span className="span1t">Future</span> Of Art
              </div>
              <span className="span1t">Technology </span>Is Here
              
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
   
      </div>

     
  );
};
export default future;

