import React from "react";
import img from "../Project/wallpaperflare.com_wallpaper (2).jpg";
import CommonData from "./CommonData";

const Home = () =>{
    return(
        <>
           <CommonData name="I am a Software Developer Making the Websites" 
           imgsrc={img} 
           visit="/education" 
           btname="Get Start"/>
        </>
    );
};

export default Home;