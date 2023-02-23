import * as React from "react";
import styles from './AHU.module.css';
import ImageCard from '../../common/ImageCard';
import image1 from "../../../assets/AHUs/1- Modular Air handling Units.jpg"
import image2 from "../../../assets/AHUs/2-Hygiene Air Handling Units.jpeg"
import image3 from "../../../assets/AHUs/3-Compact Air Handling Units.jpg"
import image4 from "../../../assets/AHUs/4-Ceiling Suspended Air handling Units.jpg"
import image5 from "../../../assets/AHUs/5-Horizontal AHUs.jpg"
import image6 from "../../../assets/AHUs/6-Vertical AHUs.jpg"
import ReactReadMoreReadLess from "react-read-more-read-less";
import { Helmet } from "react-helmet";

function AirHandlingUnits() {
  let text1 = "Welkin provides all types of cleanroom panels, like PU panels, Rockwool Panels etc., tailored to the customer requirement either machine made panels or handmade panels."
  let text2 = "Cleanroom windows are divided into cleanroom double-layer windows, fire-proof windows and dimming windows."
  let text3 = "Cleanroom ceiling is composed of modular cleanroom panels and ceiling system. Cleanroom panel sheet is very resistant to bending and has very strong characteristics that helps to walk on ceiling"
  let text4 = "Welkin provides cleanroom doors widely used in pharmaceutical industry, hospitals food industry, laboratories etc."
  let text5 = "Welkin provides cleanroom equipment like pass boxes, air shower, laminar flow cabinets, SS cabinets, Door closers, Door lock system etc."
  let text6 = "Welkin provides all kinds of cleanroom accessories like aluminum profiles, coving, anti-static epoxy paint flooring, anti-static vinyl sheet flooring etc ."

  return (
    <div>
      <Helmet>
        <title>Air Handling Units in Pakistan – WELKIN Solutions  </title>
        <meta name="description" content="We as Air Handling Units provider company in Pakistan provides hygiene AHUs, compact AHUs, modular AHUs etc. We are offering EUROVENT certified brand SYSTEMAIR AHUs. Pharma grade ahus," />
        <meta name="keywords" content="Air Handling Units, AHUs, Air Handling units in Pakistan, AHUs in Pakistan, Hygiene AHUs in Lahore Pakistan, Air Handling Units company in Pakistan, Hygiene Air handling units in Pakistan, Karachi, Lahore, Islamabad, Faisalabad, AHUs company in Pakistan. Modular AHUs," />

      </Helmet>
      <div className={styles.mainStyle}>
        <div style={{ backgroundColor: "#164057", "height": "50px" }}>
          <h2 style={{ textAlign: "center", "paddingTop": "6px", "color": "white" }}>Air Handling Units</h2>
        </div>
        <div className={styles.border}>
          <div className={styles.borderpadding}>
            <span >The air handling unit (AHU) is the heart of central air conditioning. It collects outside air and room air, removes dust and other particles from the collected air, adjusts the temperature and humidity and then supplies comfortable and hygiene air into the rooms through ducts. We believe that all air handling units should be hygiene type either in pharma industry or textile because our environment is too polluted that is very bad for our health so we need Hygiene AHUs to clean the air.
            </span>
            <br />
            <br />
            <span>
            Welkin Solutions is an exclusive distributor of Eurovent certified brand SYSTEMAIR in the territory of Pakistan. Systemair has all kinds of high energy efficient AHUs like modular AHUs, Hygiene AHUs, compact AHUs, DX Air Handling Units, Horizontal AHUs, Vertical AHUs, ceiling suspended AHUs. We as air handling units provider company in Pakistan provides after sales services like assembling, testing & commissioning of AHUs. 
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
              <p style={{ fontSize: "24px" }}>
              Modular Air handling Units
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
              <p style={{ fontSize: "24px" }}>
              Hygiene Air Handling Units
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
              <p style={{ fontSize: "24px" }}>
              Compact Air Handling Units
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
              <p style={{ fontSize: "24px" }}>
              Ceiling Suspended AHUs
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
              <p style={{ fontSize: "24px" }}>
              Horizontal AHUs
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
              <p style={{ fontSize: "24px" }}>
              Vertical AHUs
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

export default AirHandlingUnits