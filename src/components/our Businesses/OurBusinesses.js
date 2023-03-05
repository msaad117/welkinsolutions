import React from "react";
import certificate1 from "../../assets/OurBusinesses/1-Central Air-Conditioning.png"
import certificate2 from "../../assets/OurBusinesses/2-Industrial Ventilation Solutions.png"
import certificate3 from "../../assets/OurBusinesses/3-Clean Room Solutions.jpg"
import Image from '../ourProject/image';
import styles from './OurBusinesses.module.css';

export default function OurBusinesses() {
    return (
        <div className={styles.MainContainer}><h2 > Our Businesses</h2>
        <div className={styles.Cards}>
        <div className={styles.imageDiv}>
        <Image 
        Url={certificate1}
        
      />
      <p className={styles.textImage}>
      Central Air-Conditioning 
      </p>
      </div>
      <div className={styles.imageDiv}>
      <Image 
        Url={certificate2}
        
      />
       <p className={styles.textImage}>
       Industrial Ventilation 
      </p>
      </div>
      <div className={styles.imageDiv}>
      <Image 
        Url={certificate3}

      />
        <p className={styles.textImage}>
        Clean Room
      </p>
      </div>
      </div>
        </div>
    );
}
