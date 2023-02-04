import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { Zoom } from "react-slideshow-image";
import styles from './Slider.module.css';
import Profile1 from "../../assets/image1.jpeg"
import Profile2 from "../../assets/image2.jpeg"
import Profile3 from "../../assets/Clients/Industrial Ventilation Fan.jpg"
import Profile4 from "../../assets/image3.jpeg"
import Profile5 from "../../assets/image4.jpeg"
import Profile6 from "../../assets/image5.jpeg"
import Profile7 from "../../assets/image6.jpeg"

const fadeImages = [
    Profile1,Profile2,Profile3,Profile4,Profile5,Profile6,Profile7
];
const zoomOutProperties = {
    duration: 4000,
    transitionDuration: 500,
    infinite: false,
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
