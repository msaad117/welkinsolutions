import React from "react";
import AboutUs from "../aboutUs/AboutUs";
import CertificationBar from "../certificationBar/CertificationBar";
import LoopSlider from "../loopSlider/LoopSlider";
import Slider from "../slider/Slider";
import ChooseUs from "../chooseUs/chooseUs"
import OurBusinesses from "../our Businesses/OurBusinesses";
import BusinessPartner from "../businessParrner/BusinessPartner";
import OurProjects from "../ourProject/OurProjects";
import { Helmet } from "react-helmet";

export default function Home() {
    return (
      <div >
        <Helmet>
        <title>HVAC Company in Pakistan</title>
        <meta name="description" content="We as HVAC company & Clean Room Solutions company is providing HVAC & cleanroom solutions on turnkey basis in Pakistan. We have a team of experienced HVAC Engineers & cleanroom experts." />
        <meta name="keywords" content="HVAC company in Pakistan, Cleanroom solutions company in Pakistan, HVAC Solutions, clean room, Industrial ventilation Fans, Air Handling Units in companies in Pakistan, Chillers in Pakistan, Hygiene AHUs" />

        </Helmet>
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
