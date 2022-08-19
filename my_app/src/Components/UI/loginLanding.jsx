import "./loginLanding.css";
import { Link, useNavigate } from "react-router-dom";
// import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { LeftSidePannelWithLogo } from "./leftSidePannelWithLogo";

import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login";

function LoginLanging() {
  const navigate = useNavigate();

  const responseGoogle = (response) => {
    console.log(response);
    let data = {
      name: response.profileObj.name,
      email: response.profileObj.email,
    };

    if (data) {
      alert("Login successfully..");
      navigate("/");
    } else {
      alert("Login failed.");
    }
  };

  const responseFacebook = (response) => {
    console.log(response);
  };
  const componentClicked = () => {};

  return (
    <div className="loginLangdingContainer">
      <LeftSidePannelWithLogo />
      <div className="loginLandingRihgt">
        {/* <div className="headerWithBackButton">
                    <button className="backButtonIcon" onClick={()=>navigate(-1)}> Back </button>
                </div> */}
        <div className="loginLandingContentBox">
          <h3>Welcome</h3>
          <span>Sign in with an account to get started</span>
          <br />
          <br />
          <br />

          <button>
            {" "}
            <GoogleLogin
              clientId="810793553100-aaeeva1kduams4r56fbo0vdu3d9d735f.apps.googleusercontent.com"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
            />
            {/* <span>Continue with Google</span> */}
          </button>

          <br></br>
          <br></br>
          <button>
            {" "}
            <FaFacebookF style={{ color: "#1096f5" }} />
            <FacebookLogin
              appId="530843548442642"
              autoLoad={true}
              fields="name,email,picture"
              onClick={componentClicked}
              callback={responseFacebook}
            />
            {/* <span>Continue with Facebook</span>  */}
          </button>
          <br></br>
          <br></br>
          <button>
            {" "}
            <FaTwitter style={{ color: "#1da1f2" }} />{" "}
            <span>Continue with Twitter</span>{" "}
          </button>
          <br></br>
          <br></br>
          <button>
            {" "}
            <FiMail /> <span>Sign up with Email </span>{" "}
          </button>
          <br></br>
          <br></br>
          <span>
            {" "}
            Already have an account{" "}
            <Link to="/password-login">Log in with email</Link>
          </span>
          {/* </div>


                <div className="footer"> */}
          <br></br>
          <br></br>
          <span>By signing up, you agree to our</span>

          <br></br>
          <span>
            <a
              href="/"
              class="lz3b66v"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              Terms of Service
            </a>
            <a
              href="/"
              class="lz3b66v"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              Copyright Policy
            </a>
            and
            <a
              href="/"
              class="lz3b66v"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              Privacy Policy
            </a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default LoginLanging;
