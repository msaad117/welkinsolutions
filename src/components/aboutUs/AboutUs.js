import React from "react";
import about from "../../assets/aboutUs.jpeg"
import styles from './aboutUs.module.css';
export default function AboutUs() {
    return (
        <div  >
              <h2 >Who We Are Test</h2>
            <div className={styles.maincontainer}>
            <span >
                    Welkin Solutions (Pvt.) Ltd. which is involved in HVAC and Clean Room solutions business for the last many years. We have a team of skilled, experienced and specialized HVAC engineers and clean room experts who can manage all the espects of project, from design to execution. We as HVAC company is providing turnkey solution i.e. supply of HVAC equipment, installation of HVAC equipment, testing, commissioning and after sales services.
                </span>
                <div className={styles.InnerContainer}>
            <div className={styles.Paracontainer}>  
                <span >
                We are the official business partner of most renowned brand Systemair in Pakistan. The company was founded in 1974 with a pioneering idea in developing and introducing the circular in line centrifugal duct fan which has simplified ventilation systems. Now the company has 27 factories, 10 technology centers and 3 distribution centers all over the world.
                </span>
                <span>
                Our range has grown ­substantially to span a wide range of energy efficient fans, air handling units, air distribution products, chillers, precision cooling, air curtains and heating products. Our products are robust and easy to choose, install and use. Operating from the values of simplicity and reliability, our business concept is to develop, manufacture and market high-quality ventilation products. On the basis of our business concept and with our customers in focus, our aim is to be your most efficient and helpful partner in mastering your indoor air quality challenges.</span>  
            </div>
            <div className={styles.imgcontainer} >
                <img className={styles.img} src={about}></img></div>
                </div>
                </div>
        </div>
    );
}
