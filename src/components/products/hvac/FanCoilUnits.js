import * as React from "react";
import styles from './FanCoilUnits.module.css';
import ImageCard from '../../common/ImageCard';
import image1 from "../../../assets/Fan Coil Units/1- Casstte Type FCUs.jpg"
import image2 from "../../../assets/Fan Coil Units/2- Floor-Ceiling FCUs.jpg"
import image3 from "../../../assets/Fan Coil Units/3- Wall Mounted FCUs.jpg"
import image4 from "../../../assets/Fan Coil Units/4- Ducted FCUs.jpg"
import image5 from "../../../assets/Fan Coil Units/5- Miscellaneous Accessories.jpg"


import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function FanCoilUnits() {

  return (
    <div>
      <Helmet>
        <title>Fan Coil Units in Pakistan – Welkin Solutions (Pvt.) Ltd.</title>
        <meta name="description" content="We are providing all types of fan coil units in Pakistan. We have ducted FCUs, cassette type FCUs, wall mounted FCUs ceiling suspended FCUs etc." />
        <meta name="keywords" content="Fan coil units in Pakistan, FCUs in Pakistan, Cassette type FCUs in Pakistan, ducted FCUs in Pakistan, ceiling suspended FCUs in Pakistan, Lahore, Karachi, Islamabad, Faisalabad, water" />

      </Helmet>
      <div className={styles.mainStyle}>
        <div style={{ backgroundColor: "#164057", "height": "50px" }}>
          <h2 style={{ textAlign: "center", "paddingTop": "6px", "color": "white" }}>Fan Coil Units</h2>
        </div>
        <div className={styles.border}>
          <div className={styles.borderpadding}>
            <span >We have all kinds of fan coil units that use water as the exchange fluid like ducted FCUs, cassette type
FCUs, wall mounted FCUs, ceiling suspended FCUs, Floor FCUs etc.
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
              Casstte Type FCUs
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
              Floor-Ceiling FCUs
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
              Wall Mounted FCUs
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
              Ducted FCUs
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
              Miscellaneous Accessories
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

export default FanCoilUnits