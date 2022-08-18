import "./App.css";
// import { Footer } from './Components/Footer/Footer'
import Home from "./Components/Home/Home";
// import Services from "./Components/Services/Services";
// import About from "./Components/About/About";
// import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar";



function App() {
  return (
    <div className="App">
    
     <Navbar />
     <Home />
      {/* <Routes> */}
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} /> */}
        {/* <Route path="/login" element={< Login/>} /> */}
  
  
      {/* </Routes> */}
    </div>
  );
}

export default App;
