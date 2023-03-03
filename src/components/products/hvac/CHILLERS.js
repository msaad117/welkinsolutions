import * as React from "react";
import styles from './CHILLERS.module.css';
import ImageCard from '../../common/ImageCard';
import image1 from "../../../assets/Chillers/1- Air Cooled Chillers.jpg"
import image2 from "../../../assets/Chillers/1- Air Cooled Heat Pumps.jpg"
import image3 from "../../../assets/Chillers/3- Water Cooled Chillers.jpg"
import image4 from "../../../assets/Chillers/4- Water Cooled Heat Pumps.jpg"
import ReactReadMoreReadLess from "react-read-more-read-less";
import { Helmet } from "react-helmet";

function CHILLERS() {

  return (
    <div>
      <Helmet>
        <title>Chillers Suppliers in Pakistan – Welkin Solutions (Pvt.) Ltd.</title>
        <meta name="description" content="We as chiller suppliers, supplies all kinds of chillers like Air Cooled Screw Chillers, Water Cooled Screw Chillers, Air Cooled Scroll Chillers Centrifugal Chillers etc. in Pakistan." />
        <meta name="keywords" content="Chillers in Pakistan, Chiller Suppliers in Pakistan, Air Cooled Chillers in Pakistan, Water Cooled Screw chillers, Water Cooled Chillers in Pakistan, Karachi, Lahore, Islamabad, Faisalabad, Centrifugal Chillers, Turbo Core Chillers, Absorption Chillers" />

      </Helmet>
      <div className={styles.mainStyle}>
        <div style={{ backgroundColor: "#164057", "height": "50px" }}>
          <h2 style={{ textAlign: "center", "paddingTop": "6px", "color": "white" }}>Chillers</h2>
        </div>
        <div className={styles.border}>
          <div className={styles.borderpadding}>
            <span >We are offering all types of Chillers like Air Cooled Screw Chillers Inverter type, Air Cooled Scroll Chillers Inverter Type, Water Cooled Screw Chillers inverter type etc. in Pakistan. Our chiller system uses water as the exchange fluid that offering the perfect combination of comfort and high efficiency. 
            </span>
            <br />
            <br />
            <span>
            Chillers can be used as process chillers and also can be complemented with air handling units to ensure perfect air quality. The chiller system is perfect for any type of building like Textile industry, Pharma Industry, Commercial Buildings, Hospitals, Offices etc. Our all chillers are AHRI or EUROVENT certified.
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
              Air Cooled Chillers
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
              Air Cooled Heat Pumps
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
              Water Cooled Chillers
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
              Water Cooled Heat Pumps
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

export default CHILLERS