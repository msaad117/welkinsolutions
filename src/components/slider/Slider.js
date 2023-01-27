import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Zoom } from "react-slideshow-image";
import styles from './Slider.module.css';
import Profile1 from "../../assets/Clients/Industrial Ventilation Fan.jpg"
import Profile2 from "../../assets/Profile-2.jpeg"
import Profile3 from "../../assets/Profile-3.jpeg"
import Profile4 from "../../assets/Profile-4.jpeg"
import Profile5 from "../../assets/Profile-5.jpeg"
import Profile6 from "../../assets/Profile-6.jpeg"


const fadeImages = [
    Profile1,Profile2,Profile3,Profile4,Profile5,Profile6
];
const zoomOutProperties = {
    duration: 4000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    scale: 0.4,
    arrows: true
  };
export default function Slider() {
    return (
        <div className={styles.SliderContainer}>
          <Zoom {...zoomOutProperties}>
            {fadeImages.map((each, index) => (
              <img key={index} className={styles.ImageClass} src={each} />
            ))}
          </Zoom>
        </div>
      );
}
