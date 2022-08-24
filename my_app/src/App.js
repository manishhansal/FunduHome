import "./App.css";
import { Route, Routes } from "react-router-dom";
// import { Footer } from './Components/Footer/Footer'
import Home from "./Components/Home/Home";
// import Services from "./Components/Services/Services";
// import About from "./Components/About/About";
// import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar";
import LoginLanging from "./Components/UI/loginLanding";
import Signup from "./Components/UI/signup";
import LoginWithMail from "./Components/UI/loginWithMail";
import ForgotPassword from "./Components/UI/forgotPassword";

function App() {
  return (
    <div className="App">
      <Navbar />
  
      <Routes>
        <Route path="/" element={<Home />} />
      

        <Route path="/loginlanding" element={<LoginLanging />} />
        <Route path="password-login" element={<LoginWithMail />} />
        <Route path="signup" element={<Signup />} />

        <Route path="forgot-password" element={<ForgotPassword />} />
      </Routes>
    </div>
  );
}

export default App;