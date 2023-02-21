import * as React from "react";
import styles from './CleanRoom.module.css';
import ImageCard from '../../our Businesses/ImageCard';
import image1 from "../../../assets/Cleanroom/1-Cleanroom Panels.jpeg"
import image2 from "../../../assets/Cleanroom/2-Cleanroom Windows.jpg"
import image3 from "../../../assets/Cleanroom/3-Cleanroom Ceiling Systems.jpg"
import image4 from "../../../assets/Cleanroom/4-Cleanroom Doors.jpg"
import image5 from "../../../assets/Cleanroom/5-Cleanroom Equipment.jpg"
import image6 from "../../../assets/Cleanroom/6-Cleanroom Accessaries.png"
import ReactReadMoreReadLess from "react-read-more-read-less";
import { Helmet } from "react-helmet";

function CleanRooms() {
  let text1 = "Welkin provides all types of cleanroom panels, like PU panels, Rockwool Panels etc., tailored to the customer requirement either machine made panels or handmade panels."
  let text2 = "Cleanroom windows are divided into cleanroom double-layer windows, fire-proof windows and dimming windows."
  let text3 = "Cleanroom ceiling is composed of modular cleanroom panels and ceiling system. Cleanroom panel sheet is very resistant to bending and has very strong characteristics that helps to walk on ceiling"
  let text4 = "Welkin provides cleanroom doors widely used in pharmaceutical industry, hospitals food industry, laboratories etc."
  let text5 = "Welkin provides cleanroom equipment like pass boxes, air shower, laminar flow cabinets, SS cabinets, Door closers, Door lock system etc."
  let text6 = "Welkin provides all kinds of cleanroom accessories like aluminum profiles, coving, anti-static epoxy paint flooring, anti-static vinyl sheet flooring etc ."

  return (
    <div>
      <Helmet>
        <title>Cleanroom Solutions company in Pakistan | Welkin Solutions </title>
        <meta name="description" content="Welkin Solutions is an emerging cleanroom company in Pakistan. We as cleanroom solutions provider company provides solutions on turkey basis from design, supply to execution." />
        <meta name="keywords" content="Cleanroom solutions, cleanroom solutions in pakistan, cleanroom companies in Pakistan, Lahore, karachi, faisalabad, Islamabad, cleanroom panels in pakistan, cleanroom construction in Pakistan, cleanroom windows" />

      </Helmet>
      <div style={{ "textAlign": "center", "width": "94%", "height": "250px", "marginLeft": "2%", "marginRight": "2%", "marginTop": "30px", "marginBottom": "20px" }}>
        <div style={{ backgroundColor: "#164057", "height": "50px" }}>
          <h2 style={{ textAlign: "center", "paddingTop": "6px", "color": "white" }}>Clean Room Solutions</h2>
        </div>
        <div className={styles.border}>
          <div className={styles.borderpadding}>
            <span >Clean room is a basic project with a wide range of application industries. In many engineering fields, clean space is needed to meet some high processing requirements of ISO standards.
            </span>
            <br />
            <span>
              Welkin Solutions as cleanroom company specializing in the cleanroom design, supply, planning and cleanroom construction in Pakistan. Welkin has a team of professionals with cleanroom and pharma specialists who can understand the customer need more easily in the field of cleanroom.
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
                Cleanroom Wall Panels
              </p>
              {/* <ReadMoreReact text={text}
                min={40}
                // ideal={30}
                max={50}
                readMoreText=" read more"/> */}
              <ReactReadMoreReadLess
                charLimit={50}
                readMoreText={"Read more ▼"}
                readLessText={"Read less ▲"}
                readMoreStyle={{ fontWeight: "2500", color: "black" }}
                readLessStyle={{ fontWeight: "2500", color: "black" }}
              >
                {text1}
              </ReactReadMoreReadLess>

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
                Cleanroom Windows
              </p>
              {/* <ReadMoreReact text={text}
                min={40}
                // ideal={30}
                max={50}
                readMoreText=" read more"/> */}
              <ReactReadMoreReadLess
                charLimit={50}
                readMoreText={"Read more ▼"}
                readLessText={"Read less ▲"}
                readMoreStyle={{ fontWeight: "2500", color: "black" }}
                readLessStyle={{ fontWeight: "2500", color: "black" }}
              >
                {text2}
              </ReactReadMoreReadLess>

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
                Cleanroom Ceiling
              </p>
              {/* <ReadMoreReact text={text}
                min={40}
                // ideal={30}
                max={50}
                readMoreText=" read more"/> */}
              <ReactReadMoreReadLess
                charLimit={50}
                readMoreText={"Read more ▼"}
                readLessText={"Read less ▲"}
                readMoreStyle={{ fontWeight: "2500", color: "black" }}
                readLessStyle={{ fontWeight: "2500", color: "black" }}
              >
                {text3}
              </ReactReadMoreReadLess>

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
                Cleanroom Doors
              </p>
              {/* <ReadMoreReact text={text}
                min={40}
                // ideal={30}
                max={50}
                readMoreText=" read more"/> */}
              <ReactReadMoreReadLess
                charLimit={50}
                readMoreText={"Read more ▼"}
                readLessText={"Read less ▲"}
                readMoreStyle={{ fontWeight: "2500", color: "black" }}
                readLessStyle={{ fontWeight: "2500", color: "black" }}
              >
                {text4}
              </ReactReadMoreReadLess>

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
                Cleanroom Equipment
              </p>
              {/* <ReadMoreReact text={text}
                min={40}
                // ideal={30}
                max={50}
                readMoreText=" read more"/> */}
              <ReactReadMoreReadLess
                charLimit={50}
                readMoreText={"Read more ▼"}
                readLessText={"Read less ▲"}
                readMoreStyle={{ fontWeight: "2500", color: "black" }}
                readLessStyle={{ fontWeight: "2500", color: "black" }}
              >
                {text5}
              </ReactReadMoreReadLess>

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
                Cleanroom Accessories
              </p>
              {/* <ReadMoreReact text={text}
                min={40}
                // ideal={30}
                max={50}
                readMoreText=" read more"/> */}
              <ReactReadMoreReadLess
                charLimit={50}
                readMoreText={"Read more ▼"}
                readLessText={"Read less ▲"}
                readMoreStyle={{ fontWeight: "2500", color: "black" }}
                readLessStyle={{ fontWeight: "2500", color: "black" }}
              >
                {text6}
              </ReactReadMoreReadLess>

            </p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default CleanRooms