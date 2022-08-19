import React from 'react'
import './loginWithMail.css'
import { useNavigate} from 'react-router-dom';
import { LeftSidePannelWithLogo } from './leftSidePannelWithLogo';
import { AiOutlineLeft } from 'react-icons/ai';
const LoginWithMail = () => {
  const [form, setForm] = React.useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { id, value } = e.target;
    setForm({
      ...form,
      [id]: value,
    });
  };

  const handleSignin = (e) => {
    e.preventDefault();
    if (form.email !== "" && form.password !== "") {
      const payloadjson = JSON.stringify(form);

      fetch(`https://fundu.herokuapp.com/signIn`, {
        method: "POST",
        body: payloadjson,
        headers: {
          "content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            alert("Login successfully..");
            localStorage.setItem("user", JSON.stringify(response));
            navigate("/");
          } else {
            alert("Invalid User.");
          }
        })
        .catch((err) => console.log(err));
    } else {
      alert("Email and Password are required.");
    }
  };
  const { email, password } = form;
  const newLocal = "btn btn-primary";
  return (
    <div className="loginLangdingContainer">
            <LeftSidePannelWithLogo/>
            <div className="loginLandingRihgt">
                <div className="headerWithBackButton">
                    <AiOutlineLeft className='backButtonIcon'/>
                    <span className="backButton" onClick={()=>navigate(-1)}> Back </span>
                </div>
                <div className="loginLandingContentBox">
                <form onSubmit={handleSignin}>

                    <h3>Log in</h3>
                    
                    <p>Don't have an account? <span style={{color:'#ac8ef9'}} onClick={()=>navigate('/signup')}>Sign up</span> </p><br />
                    
                    <input style={{'borderBottom':'none'}} className='inputemail'
                    type="email"
                    placeholder="Enter email"
                    id="email"
                    value={email}
                    onChange={handleChange} />
                    <br />
                    <input  className='inputemail'
                    type="password"
                 placeholder="Enter password"
                    id="password"
                    value={password}
                    onChange={handleChange} />
                    <br />
                    <br />
                    <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
              <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
            <div className="d-grid">
          <button type="submit" className={newLocal}>
            Sign In
          </button>
        </div>
                    {/* <button id='nextButtonOnSignup' className='buttonlogin'>Next</button> */}
                    <br /><br />
                    <span style={{color:'#ac8ef9'}} onClick={()=>navigate('/forgot-password')}>Forgot Password?</span>
                    
                 </div>
                 </form>
                </div>
        </div>
        </div>
  )
}

export default LoginWithMail;
