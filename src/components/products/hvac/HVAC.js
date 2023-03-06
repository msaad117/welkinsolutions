import * as React from "react";
import styles from './HVAC.module.css';
import ImageCard from '../../common/ImageCard';
import image1 from "../../../assets/HVAC/1-Air Handling Units.jpeg"
import image2 from "../../../assets/HVAC/2-Chillers.jpg"
import image3 from "../../../assets/HVAC/3-Fan Coil Units.jpg"
import image4 from "../../../assets/HVAC/5-Roof Top Packege Units.jpg"
import image5 from "../../../assets/HVAC/6-Data Center Cooling.jpeg"
import image6 from "../../../assets/HVAC/7- VRF or VRV System.jpeg"
import image7 from "../../../assets/HVAC/8- Fan Coil Units.jpeg"
import image8 from "../../../assets/HVAC/9- Industrial Ventilation Fans.jpeg"
import image9 from "../../../assets/HVAC/10- Air Distribution Products.jpeg"
import image10 from "../../../assets/HVAC/11- Fire Safety Products.jpeg"
import image11 from "../../../assets/HVAC/12- Fabric Duct.jpeg"
import ReactReadMoreReadLess from "react-read-more-read-less";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function HVAC() {

  return (
    <div style={{height:"auto"}}>
      <Helmet>
        <title>HVAC Products in Pakistan – Welkin Solutions (Pvt.) Ltd.</title>
        <meta name="description" content="We as EUROVENT certified brand SYSTEMAIR distributor in territory of Pakistan offers HVAC products like Air Handling Units, Chillers, Fan Coil Units, VRF System, Data Center Cooling, Industrial Ventilation Fans etc." />
        <meta name="keywords" content="HVAC, HVAC products, HVAC products in Pakistan, HVAC products in Lahore, HVAC products in Karachi, HVAC products in Islamabad, HVAC products in Faisalabad, EUROVENT HVAC products in Pakistan." />

      </Helmet>
      <div className={styles.mainStyle}>
        <div style={{ backgroundColor: "#164057", "height": "50px" }}>
          <h2 style={{ textAlign: "center", "paddingTop": "6px", "color": "white" }}>HVAC Products</h2>
        </div>
        <div className={styles.border}>
          <div className={styles.borderpadding}>
            <span >Welkin Solutions (Pvt.) Ltd. is an official distributor of SYSTEMAIR in Pakistan. SYSTEMAIR offers a wide range of HAVC products like Air Handling Units, Fan Coil Units, Chillers, Data Center Cooling Units, Industrial Ventilation Fans, VRF system, Air Distribution Products, Fire Safety Products. 
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
          <div >
            <div >
           <a style={{width:"100%"}} href="/products/hvac/air-handling-units"> 
            <p className={styles.textImageinner}>
              <p style={{ fontSize: "27px" ,paddingTop: "5px",fontWeight: "1000"}}>
              Air Handling Units
              </p>
              {/* <ReadMoreReact text={text}
                min={40}
                // ideal={30}
                max={50}
                readMoreText=" read more"/> */}
              
            </p>
         
            </a>
            </div>
          </div>
        </div>
        <div className={styles.imageDiv}>
          <ImageCard
            imageUrl={image2}
            imageAlt={"cleanroom image"}
          />
          <div>
          <a style={{width:"100%"}} href="/products/hvac/chillers">
            <p className={styles.textImageinner}>
              <p style={{ fontSize: "27px" ,paddingTop: "5px",fontWeight: "1000"}}>
              Chillers
              </p>
              {/* <ReadMoreReact text={text}
                min={40}
                // ideal={30}
                max={50}
                readMoreText=" read more"/> */}

            </p>
            </a>
          </div>
        </div>
        <div className={styles.imageDiv}>
        <a style={{width:"100%"}} href="/products/hvac/fcus"> 
          <ImageCard
            imageUrl={image7}
            imageAlt={"cleanroom image"}
          />
          <div>

            <p className={styles.textImageinner}>
              <p style={{ fontSize: "27px" ,paddingTop: "5px",fontWeight: "1000"}}>
              Fan Coil Units 
              </p>
              {/* <ReadMoreReact text={text}
                min={40}
                // ideal={30}
                max={50}
                readMoreText=" read more"/> */}
            </p>
            
          </div>
          </a>
        </div>
        <div className={styles.imageDiv}>
          <ImageCard
            imageUrl={image4}
            imageAlt={"cleanroom image"}
          />
          <div>
            <a style={{width:"100%"}} href='/products/hvac/rooftoppackageunits'>
            <p className={styles.textImageinner}>
              <p style={{ fontSize: "27px" ,paddingTop: "5px",fontWeight: "1000"}}>
              Roof Top Packege Units
              </p>
              {/* <ReadMoreReact text={text}
                min={40}
                // ideal={30}
                max={50}
                readMoreText=" read more"/> */}
            </p>
            </a>
          </div>
          
        </div>
        <div className={styles.imageDiv}>
          <ImageCard
            imageUrl={image5}
            imageAlt={"cleanroom image"}
          />
          <div>
          <a style={{width:"100%"}} href='/products/hvac/datacentercooling'>
            <p className={styles.textImageinner}>
              <p style={{ fontSize: "27px" ,paddingTop: "5px",fontWeight: "1000"}}>
              Data Center Cooling
              </p>
              {/* <ReadMoreReact text={text}
                min={40}
                // ideal={30}
                max={50}
                readMoreText=" read more"/> */}
            </p>
            </a>
          </div>
        </div>
        <div className={styles.imageDiv}>
          <ImageCard
            imageUrl={image6}
            imageAlt={"cleanroom image"}
          />
          <div>
          <a style={{width:"100%"}} href="/products/hvac/vrfsystem">
            <p className={styles.textImageinner}>
              <p style={{ fontSize: "27px" ,paddingTop: "5px",fontWeight: "1000"}}>
              VRF or VRV System
              </p>
              {/* <ReadMoreReact text={text}
                min={40}
                // ideal={30}
                max={50}
                readMoreText=" read more"/> */}
            </p>
            </a>
          </div>
          
        </div>
        <div className={styles.imageDiv}>
          <ImageCard
            imageUrl={image8}
            imageAlt={"cleanroom image"}
          />
          <div>
          <a style={{width:"100%"}} href="/products/hvac/industrialventilationfans">
            <p className={styles.textImageinner}>
              <p style={{ fontSize: "27px" ,paddingTop: "5px",fontWeight: "1000"}}>
              Industrial Ventilation
              </p>
              {/* <ReadMoreReact text={text}
                min={40}
                // ideal={30}
                max={50}
                readMoreText=" read more"/> */}
              
            </p>
            </a>
          </div>
        </div>
        <div className={styles.imageDiv}>
          <ImageCard
            imageUrl={image11}
            imageAlt={"cleanroom image"}
          />
          <div>
            <a style={{width:"100%"}} href='/products/hvac/Fabricduct'>
            <p className={styles.textImageinner}>
              <p style={{ fontSize: "27px" ,paddingTop: "5px",fontWeight: "1000"}}>
              Fabric Duct
              </p>
              {/* <ReadMoreReact text={text}
                min={40}
                // ideal={30}
                max={50}
                readMoreText=" read more"/> */}
              
            </p>
            </a>
          </div>
        </div>
        <div className={styles.imageDiv}>
          <ImageCard
            imageUrl={image9}
            imageAlt={"cleanroom image"}
          />
          <div>

            <p className={styles.textImageinnerone}>
              <p style={{ fontSize: "27px" ,paddingTop: "5px",fontWeight: "1000"}}>
              Air Distribution Products
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
            imageUrl={image10}
            imageAlt={"cleanroom image"}
          />
          <div>

            <p className={styles.textImageinnerone}>
              <p style={{ fontSize: "27px" ,paddingTop: "5px",fontWeight: "1000"}}>
              Fire Safety Products
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

export default HVAC