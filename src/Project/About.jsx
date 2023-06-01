import React from "react";
import CommonData from "./CommonData";
import img from "../Project/1968289.webp";

const About = () =>{
    return(
        <>
            <CommonData name="Welcome to about page" 
                imgsrc={img} 
                visit="/Contact" 
                btname="Contact Me "
            />
        </>
    );
};

export default About;
