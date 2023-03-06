import React from "react";
import Portfolio from "../../assets/2-Systemair Portfolio.png"
import styles from './BusinessPartner.module.css';
export default function BusinessPartner() {
    return (
        <div style={{"width":"100%","marginTop":"40px"}}>
            <div >< h2 style={{"fontSize":"32px"}}> Business Partner</h2></div>
            <div >
            <p className={styles.maincontainer}>
            We are the official business partner of most renowned HVAC brand <a style={{color:"#164057",fontWeight:"900"}} href="https://www.systemair.com/">Systemair</a> in Pakistan. The Systemair company was founded in 1974 with a pioneering idea in developing and introducing the circular in line centrifugal duct fan which has simplified ventilation systems. Our range has grown ­substantially to span a wide range of energy efficient fans, air handling units, air distribution products, chillers, precision cooling, air curtains and heating products.
                </p>
           
                </div>
            <img  className={styles.image} src={Portfolio}  />
            </div>
    )}