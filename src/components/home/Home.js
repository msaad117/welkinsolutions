import React from "react";
import AboutUs from "../aboutUs/AboutUs";
import CertificationBar from "../certificationBar/CertificationBar";
import LoopSlider from "../loopSlider/LoopSlider";
import Slider from "../slider/Slider";
import ChooseUs from "../chooseUs/chooseUs"
import OurBusinesses from "../our Businesses/OurBusinesses";
import BusinessPartner from "../businessParrner/BusinessPartner";
import OurProjects from "../ourProject/OurProjects";

export default function Home() {
    return (
      <div >
        
        <Slider/>
        <AboutUs/>
        <OurBusinesses/>
        <BusinessPartner/>
        <OurProjects/>
        {/* <CertificationBar/> */}
        <LoopSlider/>
        
      </div>
      );
}
