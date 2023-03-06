import React from "react";
import facebook from "../../assets/SocialMedia/icons8-facebook-48.png"
import linkedin from "../../assets/SocialMedia/icons8-linkedin-circled-48.png"
import youtube from "../../assets/SocialMedia/icons8-youtube-48.png"
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <div className={styles.MainContainer} >
            <div className={styles.LogoContainer}>
                <a href="https://www.facebook.com/welkinsolutionspvtltd" style={{ "paddingRight": "7px" }}>
                    <div  ><img className={styles.Img} src={facebook}></img></div>
                </a >
                <a href="https://www.linkedin.com/company/welkin-solutions" style={{ "paddingRight": "7px" }}>
                    <div  ><img className={styles.Img} src={linkedin}></img></div>
                </a>
                <a href="https://www.youtube.com/@welkinsolutions4905/videos">
                    <div  ><img className={styles.Img} src={youtube}></img></div>
                </a>
            </div>
            <div className={styles.AddressContainer}>
                <div className={styles.InnerAddressContainer }>
                    <h2>HEAD OFFICE</h2>
                    <a style={{"textDecoration":"underline"}} href="https://goo.gl/maps/FLmsVMQHyBHqRJUC8">
                    68-69 Tulip Commercial Zone , Opposite <br/>Grand Mosque,Bahria Town Lahore
                    </a>
                    <span>Phone:&nbsp;<a  style={{"fontFamily":"Raleway,sansSerif"}} href="tel:+92 42 35976300">+92 42 35976300</a></span>
                    <span>Cell:&nbsp;<a style={{"fontFamily":"Raleway,sansSerif"}} href="tel:+92 310 4499254">+92 310 4499254</a></span>
                    <span>Email:&nbsp;<a  href="mailto:info@welkin.com.pk">info@welkin.com.pk</a></span>
                </div>
                <div className={styles.AddressContainer}>
                <div className={styles.InnerAddressContainer }>
                    <h2>Karachi Office </h2>
                    <a style={{"textDecoration":"underline"}} href="https://goo.gl/maps/Dt8NL8bnCfwDh6ZKA">
                    1H, PECHS Block 6, Shahrah-e-Faisal, Karachi
                    </a>
                    <span>Cell:&nbsp;<a style={{"fontFamily":"Raleway,sansSerif"}} href="tel:+92 324 9881338">+92 324 9881338</a></span>
                    <span>Email:&nbsp;<a href="mailto:info@welkin.com.pk">info@welkin.com.pk</a></span>
                </div>
                <div>

                </div>
            </div>
            <div className={styles.AddressContainer}>
                <div className={styles.InnerAddressContainer }>
                    <h2>Islamabad Office </h2>
                    <span>Cell:&nbsp;<a style={{"fontFamily":"Raleway,sansSerif"}} href="tel:+92 310 4499254">+92 310 4499254</a></span>
                    <span>Email:&nbsp;<a href="mailto:info@welkin.com.pk">info@welkin.com.pk</a></span>
                </div>
                <div>

                </div>
            </div>
            </div>

        </div>
    );
}
