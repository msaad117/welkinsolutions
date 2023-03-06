import * as React from "react";
import styles from './FabricAirDuct.module.css';
import ImageCard from '../../common/ImageCard';
import image1 from "../../../assets/Fabric Air Duct/Fabric Air Duct.jpg"


import ReactReadMoreReadLess from "react-read-more-read-less";
import { Helmet } from "react-helmet";

function FabricAirDuct() {
    let text1 = "We as fabric duct company offers imported fabric / textile duct in Pakistan that has optimized air diffusion solutions and guaranteed air performance. Coming in a wide variety of shapes and colors allowing free reign on design and imagination. Their advanced technology can be used for refrigerating, air-conditioning, refreshing, ventilating, or heating any atmosphere or alternatively transporting treated air. Applications include all types such as; industry, public buildings, commercial high rise, food-processing plants, logistics warehousing, pharmaceutical, etc."
    

    return (
        <div>
            <Helmet>
                <title>Fabric / Textile Duct in Pakistan – Welkin Solutions</title>
                <meta name="description" content="We as fabric duct company in Pakistan import fabric/textile duct from Europe. The main benefit of textile
duct is that it is easy to install and less expensive than other metal ducts." />
                <meta name="keywords" content="Fabric duct companies in Pakistan, textile duct companies in Pakistan, Lahore, karachi, Islamabad,
Faisalabad" />

            </Helmet>
            <div className={styles.mainStyle}>
                <div style={{ backgroundColor: "#164057", "height": "50px" }}>
                    <h2 style={{ textAlign: "center", "paddingTop": "6px", "color": "white" }}>Fabric Air Duct</h2>
                </div>
             
            </div>
            <div className={styles.Cards}>
                <div >
                    <img className={styles.imageDiv}
                        src={image1}
                        alt={"cleanroom image"}
                    />
                    <div>
                    </div>
                </div>
                <div>
                    <p  className={styles.textImageinner}>
                            
                            {text1}
                        </p>
                    </div>
            </div>
        </div>

    )
}

export default FabricAirDuct