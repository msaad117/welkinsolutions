import React from "react";
import certificate1 from "../../assets/certificates/AEO_logo.jpg"
import certificate2 from "../../assets/certificates/AMCA-International.png"
import certificate3 from "../../assets/certificates/ATEX.png"
import certificate4 from "../../assets/certificates/download.png"
import certificate5 from "../../assets/certificates/Eurovent.jpg"
import certificate6 from "../../assets/certificates/iso.png"
import certificate7 from "../../assets/certificates/LEED.jpg"
import styles from './CertificationBar.module.css';

export default function CertificationBar() {
    return (
        <div className={styles.MainContainer}><h2 > Our Certifications</h2>
        <div className={styles.Cards} > 
          <div className={styles.Card}><img className={styles.Img} src={certificate1}></img></div>
         <div className={styles.Card}><img className={styles.Img} src={certificate2}></img></div>
        <div className={styles.Card}><img className={styles.Img} src={certificate3}></img></div>
         <div className={styles.Card}><img className={styles.Img} src={certificate4}></img></div>
          <div className={styles.Card}><img className={styles.Img} src={certificate5}></img></div>
        <div className={styles.Card}><img className={styles.Img} src={certificate6}></img></div>
         <div className={styles.Card}><img className={styles.Img} src={certificate7}></img></div>

        </div>
        </div>
    );
}
