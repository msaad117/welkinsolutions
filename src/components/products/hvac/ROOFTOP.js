import * as React from "react";
import styles from './RoofUnit.module.css';
import ImageCard from '../../common/ImageCard';
import image1 from "../../../assets/Rooftop Units/1-Rooftop Package Units.jpg"
import image2 from "../../../assets/Rooftop Units/2-Rooftop Package Units - SYSAER R32.jpg"

import ReactReadMoreReadLess from "react-read-more-read-less";
import { Helmet } from "react-helmet";

function ROOFTOP() {
    let text1 = "With Systemair rooftop package units, you get a mono package solution to heat and cool large buildings such as industries and shopping malls that have small space for installation. It is also easy to install directly on the roof. SysAer rooftop units have been designed and optimized to operate with R410A refrigerant fluid. Nominal cooling capacity range from 48 to 219 kW and heating capacity from 51 to 214 kW."
    let text2 = "SYSAER R32 rooftop units have been designed to operate with the R32 refrigerant. With a GWP (Global Warming Potential) of 675, this refrigerant is 3 times less polluting than the standard R410A. Nominal cooling capacity: from 106 to 139 kW Nominal heating capacity: from 106 to 142 kW"

    return (
        <div>
            <Helmet>
                <title>Rooftop Package Units in Pakistan – Welkin Solutions</title>
                <meta name="description" content="We are providing rooftop package units in Pakistan that are space saving and highly energy efficient." />
                <meta name="keywords" content="Rooftop package units in Pakistan, rooftop units in Pakistan, Lahore, karachi,
Islamabad, Faisalabad" />

            </Helmet>
            <div className={styles.mainStyle}>
                <div style={{ backgroundColor: "#164057", "height": "50px" }}>
                    <h2 style={{ textAlign: "center", "paddingTop": "6px", "color": "white" }}>Rooftop Package Units</h2>
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
                            Rooftop Package Units
                            </p>
                            <ReactReadMoreReadLess
                                charLimit={100}
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
                            Rooftop PU SYSAER R32
                            </p>
                            <ReactReadMoreReadLess
                                charLimit={100}
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
            </div>
        </div>

    )
}

export default ROOFTOP