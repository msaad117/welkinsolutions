import * as React from "react";
import styles from './CHILLERS.module.css';
import ImageCard from '../../common/ImageCard';
import image1 from "../../../assets/Industrial Ventilation/1-Circular Inline Duct Fans.jpg"
import image2 from "../../../assets/Industrial Ventilation/2- Rectangular Duct Fans.jpg"
import image3 from "../../../assets/Industrial Ventilation/3- Axials Fans.jpg"
import image4 from "../../../assets/Industrial Ventilation/4- Explosion Proof Fans.jpg"
import image5 from "../../../assets/Industrial Ventilation/5- Smoke Extract Fans.jpg"
import image6 from "../../../assets/Industrial Ventilation/6- Centrifugal Fans.jpg"
import image7 from "../../../assets/Industrial Ventilation/7- Roof Fans.jpg"
import ReactReadMoreReadLess from "react-read-more-read-less";
import { Helmet } from "react-helmet";

function IndustrialVentilationFans() {

  return (
    <div>
      <Helmet>
        <title>Industrial Ventilation Fans in Pakistan – Welkin Solutions (Pvt.) Ltd.</title>
        <meta name="description" content="We as ventilation solutions provider, provide all kinds industrial ventilation fans in Pakistan. Ventilation Fans include inline duct fans, axial fans, belt driven fans, Jet fans, smoke extract fans, explosion proof fans etc" />
        <meta name="keywords" content="Industrial Ventilation fans in Pakistan, Ventilation Fans in Pakistan, ducted fans in Pakistan, inline ducted fans in Pakistan, jet fans in Pakistan, explosion proof fans in Pakistan, belt driven fans in Pakistan, karachi, Lahore, Islamabad, Faisalabad, Industrial ventilation Solutions in Pakistan, tube axial fans in Pakistan" />

      </Helmet>
      <div className={styles.mainStyle}>
        <div style={{ backgroundColor: "#164057", "height": "50px" }}>
          <h2 style={{ textAlign: "center", "paddingTop": "6px", "color": "white" }}>Industrial Ventilation</h2>
        </div>
        <div className={styles.border}>
          <div className={styles.borderpadding}>
            <span >The SYSTEMAIR company was founded in 1974 with a pioneering idea in developing and introducing the circular in line centrifugal duct fan which has simplified ventilation systems. 
            </span>
            <br />
            <br />
            <span>
            Welkin offers Systemair wide range of AMCA certified industrial ventilation fans in Pakistan. Ventilation Fans includes circular inline duct fans, rectangular inline duct fans, Axial Fans, Roof Fans, Smoke Extract Fans, Jet fans, Box Fans, Centrifugal Fans, Explosion Proof Fans etc.
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
              <p style={{ fontSize: "24px" ,paddingTop: "5px"}}>
              Circular Inline Duct Fans
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
              <p style={{ fontSize: "24px" ,paddingTop: "5px"}}>
              Rectangular Duct Fans
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
              <p style={{ fontSize: "24px" ,paddingTop: "5px"}}>
              Axials Fans
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
              <p style={{ fontSize: "24px" ,paddingTop: "5px"}}>
              Explosion Proof Fans
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
              <p style={{ fontSize: "24px" ,paddingTop: "5px"}}>
              Smoke Extract Fans
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
              <p style={{ fontSize: "24px" ,paddingTop: "5px"}}>
              Centrifugal Fans
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
              <p style={{ fontSize: "24px" ,paddingTop: "5px"}}>
              Roof Fans
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

export default IndustrialVentilationFans