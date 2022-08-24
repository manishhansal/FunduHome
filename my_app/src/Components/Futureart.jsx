import React from "react";
import "./futureart.css";
import imageFolder from "../imageFolder/img1.jpeg";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import AltRouteIcon from "@mui/icons-material/AltRoute";
// import DescriptionIcon from "@mui/icons-material/Description";

export const future = () => {
  return (
    <div>
        <div className="posts_main_div">
      <h1>
        The Future of <strong> Art Technology</strong> Is Here
      </h1>
      </div>
      <div className="future1ashu">
        <div>
          <img className="img1ashwini" src={imageFolder} alt="" />
        </div>
        <div>
          <p className="lor2">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate
            quasi neque voluptatibus
          </p>
          <button className="reg1" id="ashu12">
            Register Now
          </button>
        </div>
      </div>

      <div className="future2ashu">
        <div className="calday">
          <div>
            <CalendarTodayIcon /> 3
          </div>
          <div>Day</div>
        </div>
        <div className="calday">
          <div>
            <CalendarTodayIcon /> 3
          </div>
          <div>Day</div>
        </div>
        <div className="calday">
          <div>
            <CalendarTodayIcon /> 3
          </div>
          <div>Day</div>
        </div>
        <div className="calday">
          <div>
            <CalendarTodayIcon /> 3
          </div>
          <div>Day</div>
        </div>
      </div>
    </div>
  );
};
export default future;
