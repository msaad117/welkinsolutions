import * as React from "react";
import contact from "../../assets/bg-contact.jpg"
import styles from './Contact.module.css';
import map from "../../assets/map (1).png"

function Contact() {
return(
    <div>
    <div style={{ backgroundImage: `url(${contact})`,height:"420px",marginTop:"0px" ,textAlign:"center"}}>
    <div className={styles.textContainer}>
    <h1 className={styles.headingText}>Contact Welkin Solutions </h1>
    <div className={styles.innerText}>
    We are here to serve you from 9:00 am to 6:00 pm in the office and 24/7 online
    </div>
    </div>
    </div>
    <div style={{textAlign:"center",marginBottom:"25px",marginTop:"25px"}}>
   <img className={styles.imageCard} src={map}></img>
      </div>
    </div>
    
)
}

export default Contact