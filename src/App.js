import React, { useState } from "react";
import { NavBar } from './components/Navbar/basicNav'; 
import { Banner } from './components/Banner'; 
import { Projects } from './components/Project';
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App(props) { 
  return (
    <div className=""> 
      <NavBar />
      <Banner />
      <Projects /> 
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
