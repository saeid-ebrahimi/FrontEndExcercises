
import './App.css';
import React from "react";
// import HomePage from "./components/HomePage";
// import AboutLittleLemon from "./components/AboutLittleLemon";
// import Contact from "./components/Contact";
// import {Route , Routes, Link} from "react-router-dom";
import logo from "./assests/little lemon logo.png";
import ReactPlayer from "react-player";
function App() {
    const bird1 = new Audio("https://upload.wikimedia.org/wikipedia/commons/9/9b/Hydroprogne_caspia_-_Caspian_Tern_XC432679.mp3")
    const bird2 = new Audio("https://upload.wikimedia.org/wikipedia/commons/b/b5/Hydroprogne_caspia_-_Caspian_Tern_XC432881.mp3")
    function toggle1(){
       if(bird1.paused){
           bird1.play();
       }else{
           bird1.pause();
       }
    }
    function toggle2(){
        if (bird2.paused) {
            bird2.play();
        } else {
            bird2.pause();
        }
    }
    return (
    <div className="App">
         <div>
              <img src={logo} width={200} alt={"Logo Image"}/>
              <h2>Little Lemon</h2>
         </div>
        <div>
            <img  src={require("./assests/little lemon logo.png")}
                  width={200}
                  alt={"Logo Image"}/>
            <h2>Little Lemon</h2>
        </div>
        <div>
            <MyVideo/>
        </div>
        <div>
            <button onClick={toggle1}>Caspian Tern 1</button>
            <button onClick={toggle2}>Caspian Tern 2</button>
        </div>
      {/*  <nav>*/}
      {/*    <Link to="/" className="nav-item">Homepage</Link>*/}
      {/*    <Link to="/about" className="nav-item">About Little Lemon</Link>*/}
      {/*    <Link to="/contact" className="nav-item">Contact</Link>*/}
      {/*</nav>*/}

      {/*<Routes>*/}
      {/*    <Route path="/" element={<HomePage/>}></Route>*/}
      {/*    <Route path="/about" element={<AboutLittleLemon/>}></Route>*/}
      {/*    <Route path="/contact" element={<Contact/>}></Route>*/}
      {/*</Routes>*/}
    </div>
  );
}
const MyVideo = () => {
    return (
        <ReactPlayer
            url={'https://www.youtube.com/watch?v=ysz5S6PUM-U'}
            playing={false}
            volume={0.5}
        />
    )
}
export default App;
