import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Zoom } from "react-slideshow-image";
import styles from './Slider.module.css';
import Profile1 from "../../assets/1200x500 AHUS.jpg"
import Profile2 from "../../assets/1200x500.jpg"
import Profile3 from "../../assets/Clients/Industrial Ventilation Fan.jpg"
import Profile4 from "../../assets/1200x500 fan coil units.jpg"
import Profile5 from "../../assets/1200x500 clean rooms.jpg"

const fadeImages = [
    Profile1,Profile2,Profile3,Profile4,Profile5
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
