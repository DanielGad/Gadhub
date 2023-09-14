import React from "react";
import {BrowserRouter as Router} from 'react-router-dom';
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import Services from "./components/Services";
import Project from "./components/Projects";

import { useEffect } from "react";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

const App = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Router>
      <div>
        <Navbar />
          <Main />
          <About />
          <Services />
          <Project />
          <Blog />
          <Contact />
    </div>
    </Router>
  )
}

export default App