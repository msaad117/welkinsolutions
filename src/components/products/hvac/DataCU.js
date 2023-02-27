import * as React from "react";
import styles from './RoofUnit.module.css';
import ImageCard from '../../common/ImageCard';
import image1 from "../../../assets/Data Center Cooling Systems/1-Data Center Cooling Systems.jpg"


import ReactReadMoreReadLess from "react-read-more-read-less";
import { Helmet } from "react-helmet";

function DataCU() {
    let text1 = "Our label Green Ventilation features products with a high energy saving potential. All products labelled with Green ventilation combine energy economy with energy efficiency. With over 50 subsidiaries in 75 countries and more than 6,000 employees we are right where you need us. Around the globe our competent and experienced engineers and sales support teams are at your service, so you can trust Systemair being your partner in helping you with comprehensive HVAC solutions and products for a super-efficient data centre in any climatic region."
    

    return (
        <div>
            <Helmet>
                <title>Data Center Cooling Solutions – Welkin Solutions</title>
                <meta name="description" content="We as HVAC company provides data center cooling solutions like spot cooling, precision cooling, indirect
free cooling AHU, free cooling fans, hydronic cooling systems, fire safety ventilation, ATEX ventilation,
direct free cooling AHU, split cooling, close control units in Pakistan," />
                <meta name="keywords" content="Precision cooling in Pakistan, data center cooling solutions in Pakistan, Lahore, karachi, Islamabad, IT
equipment cooling solutions, spot cooling solutions" />

            </Helmet>
            <div className={styles.mainStyle}>
                <div style={{ backgroundColor: "#164057", "height": "50px" }}>
                    <h2 style={{ textAlign: "center", "paddingTop": "6px", "color": "white" }}>Data Center Cooling Systems </h2>
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
                            Data Center Cooling Systems
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
           
            </div>
        </div>

    )
}

export default DataCU