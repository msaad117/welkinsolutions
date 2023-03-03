import * as React from "react";
import styles from './VRF.module.css';
import ImageCard from '../../common/ImageCard';
import image1 from "../../../assets/VRF/1- VRF Cassette.jpg"
import image2 from "../../../assets/VRF/1- VRF Floor-Ceilling.jpg"
import image3 from "../../../assets/VRF/3- VRF High Wall.jpg"
import image4 from "../../../assets/VRF/VRF Ducted.jpg"
import image5 from "../../../assets/VRF/5- VRF Outdoor Units.jpg"
import image6 from "../../../assets/VRF/6- DX System Accessories.jpg"
import image7 from "../../../assets/VRF/7- Splits Floor - Ceilling.jpg"
import ReactReadMoreReadLess from "react-read-more-read-less";
import { Helmet } from "react-helmet";

function VRFsystem() {

  return (
    <div>
      <Helmet>
        <title>VRF System in Pakistan – Welkin Solutions (Pvt.) Ltd.</title>
        <meta name="description" content="We as HVAC solutions provider providing VRF/VRV system in Pakistan. We have all
types of indoor units like cassette type units, wall mounted units, ducted units with
matching outdoor units." />
        <meta name="keywords" content="VRF system in Pakistan, VRV system in Pakistan, Variable refrigerant flow, DX system.
Condensing units, Lahore, karachi, islamabad" />

      </Helmet>
      <div className={styles.mainStyle}>
        <div style={{ backgroundColor: "#164057", "height": "50px" }}>
          <h2 style={{ textAlign: "center", "paddingTop": "6px", "color": "white" }}>VRF System</h2>
        </div>
        <div className={styles.border}>
          <div className={styles.borderpadding}>
            <span >Systemair VRF/VRV system is the most technically advanced and energy efficient
system. This system is particularly well suited for applications such as offices, hotels,
shopping malls and residential. 
            </span>
            <br />
            <br />
            <span>
            We have all types of indoor units like cassette type units, ceiling concealed units, wall
mounted units, ducted units, floor units with matching condensing units.
            </span>
          </div>
        </div>
      </div>
      <div className={styles.Cards}>
        <div className={styles.imageDiv}>
          <ImageCard
            imageUrl={image1}
            imageAlt={"cleanroom image"}
          />
          <div>

            <p className={styles.textImageinner}>
              <p style={{ fontSize: "24px" ,fontWeight:"900",paddingTop: "25px"}}>
              VRF Cassette
              </p>
              {/* <ReadMoreReact text={text}
                min={40}
                // ideal={30}
                max={50}
                readMoreText=" read more"/> */}
              
            </p>
          </div>
        </div>
        <div className={styles.imageDiv}>
          <ImageCard
            imageUrl={image2}
            imageAlt={"cleanroom image"}
          />
          <div>

            <p className={styles.textImageinner}>
              <p style={{ fontSize: "24px" ,fontWeight:"900",paddingTop: "25px"}}>
              VRF Floor-Ceilling
              </p>
              {/* <ReadMoreReact text={text}
                min={40}
                // ideal={30}
                max={50}
                readMoreText=" read more"/> */}

            </p>
          </div>
        </div>
        <div className={styles.imageDiv}>
          <ImageCard
            imageUrl={image3}
            imageAlt={"cleanroom image"}
          />
          <div>

            <p className={styles.textImageinner}>
              <p style={{ fontSize: "24px" ,fontWeight:"900",paddingTop: "25px"}}>
              VRF High Wall
              </p>
              {/* <ReadMoreReact text={text}
                min={40}
                // ideal={30}
                max={50}
                readMoreText=" read more"/> */}
            </p>
          </div>
        </div>
        <div className={styles.imageDiv}>
          <ImageCard
            imageUrl={image4}
            imageAlt={"cleanroom image"}
          />
          <div>

            <p className={styles.textImageinner}>
              <p style={{ fontSize: "24px" ,fontWeight:"900",paddingTop: "25px"}}>
              VRF Ducted
              </p>
              {/* <ReadMoreReact text={text}
                min={40}
                // ideal={30}
                max={50}
                readMoreText=" read more"/> */}
            </p>
          </div>
        </div>
        <div className={styles.imageDiv}>
          <ImageCard
            imageUrl={image5}
            imageAlt={"cleanroom image"}
          />
          <div>

            <p className={styles.textImageinner}>
              <p style={{ fontSize: "24px" ,fontWeight:"900",paddingTop: "25px"}}>
              VRF Outdoor Units
              </p>
              {/* <ReadMoreReact text={text}
                min={40}
                // ideal={30}
                max={50}
                readMoreText=" read more"/> */}
            </p>
          </div>
        </div>
        <div className={styles.imageDiv}>
          <ImageCard
            imageUrl={image6}
            imageAlt={"cleanroom image"}
          />
          <div>

            <p className={styles.textImageinner}>
              <p style={{ fontSize: "24px" ,fontWeight:"900",paddingTop: "25px"}}>
              DX System Accessories
              </p>
              {/* <ReadMoreReact text={text}
                min={40}
                // ideal={30}
                max={50}
                readMoreText=" read more"/> */}
            </p>
          </div>
        </div>
        <div className={styles.imageDiv}>
          <ImageCard
            imageUrl={image7}
            imageAlt={"cleanroom image"}
          />
          <div>

            <p className={styles.textImageinner}>
              <p style={{ fontSize: "24px" ,fontWeight:"900",paddingTop: "25px"}}>
              Splits Floor - Ceilling
              </p>
              {/* <ReadMoreReact text={text}
                min={40}
                // ideal={30}
                max={50}
                readMoreText=" read more"/> */}
            </p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default VRFsystem