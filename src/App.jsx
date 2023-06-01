import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Project/Home";
import { Route, Routes } from "react-router-dom";
import About from "./Project/About";
import Contact from "./Project/Contact";
import Navbar from "./Project/Navbar";
import Education from "./Project/Education";


const App = () =>{
return( 
   <>
   <Navbar />
    <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/about" Component={About} />
        <Route exact path="/education" Component={Education} />
        <Route exact path="/contact" Component={Contact} />
        <Route Component={Error} />
        
    </Routes>
   </>
);
};

export default App;
