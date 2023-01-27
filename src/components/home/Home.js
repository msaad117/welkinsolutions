import React from "react";
import AboutUs from "../aboutUs/AboutUs";
import CertificationBar from "../certificationBar/CertificationBar";
import LoopSlider from "../loopSlider/LoopSlider";
import Slider from "../slider/Slider";


export default function Home() {
    return (
      <div >
        <Slider/>
        <AboutUs/>
        {/* <CertificationBar/> */}
        <LoopSlider/>
        
      </div>
      );
}
