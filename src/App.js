//import React, { useState, useEffect } from "react";
//import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar";
//import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/index";
//import Projects from "./Components/Projects/Projects";
//import Footer from "./Components/Footer";
//import Resume from "./Components/Resume/Resume";

function App() {
  /*const [load, upadateLoad] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);
    
    return () => clearTimeout(timer);
  }, []);*/

  return (
    <div>
      <Navbar

      ></Navbar>
      <main>
    
          <>
            <About></About>
          </>
        ) : (
          <Contact></Contact>
        )
      </main>
    </div>
  );
}

export default App;
