import * as React from "react";
import styles from './About.module.css';
import pdf1 from "../../assets/Systemair Portfolio.pdf"
import { AiOutlineArrowRight } from "react-icons/ai";
import pdf2 from "../../assets/Welkin Solutions (Pvt.) Ltd. - Corporate Profile.pdf"
function About() {
    function onClickFirst() {
        
        window.open(pdf2);
    } 
    function onClickSecond() {
        window.open(pdf1);
    } 
return(
    <div>
    <div style={{"textAlign":"center","width":"94%","height":"180px","marginLeft":"2%","marginRight":"2%","marginTop":"30px","marginBottom":"10px"}}>
     <div style={{backgroundColor:"#164057","height":"50px"}}>
      <h2 style={{textAlign:"center","paddingTop":"6px","color":"white"}}>Vision</h2>
     </div>
     <div className={styles.border}>
      <span style={{paddingTop:"45px"}}>To become the Leader in Products and Services of HVAC & Cleanroom Industry, through innovation and service excellence, for a healthier and safer future.
      </span>
      </div>
    </div>
    <div style={{"textAlign":"center","width":"94%","height":"180px","marginLeft":"2%","marginRight":"2%","marginTop":"30px","marginBottom":"10px"}}>
     <div style={{backgroundColor:"#164057","height":"50px"}}>
      <h2 style={{textAlign:"center","paddingTop":"6px","color":"white"}}>MISSION</h2>
     </div>
     <div className={styles.border}>
      <span style={{paddingTop:"45px"}}>
      We believe in doing well by doing good and hold ourselves accountable to make the world a better place through the solutions we provide, our engagement in society, the way we do business, and our commitment to protect people and the environment. We win when our customers win.
      </span>
      </div>
    </div>
    <div className={styles.buttonDisplay} >
        <div  onClick={onClickFirst}>
        <button className={styles.button}>
         Welkin Profile
         <span style={{"paddingTop":"2px"}}><AiOutlineArrowRight/></span>
         </button>
        </div >
        <div  onClick={onClickSecond}>
            <button className={styles.button}>
        Systemair Profile
        <span style={{"paddingTop":"2px"}}><AiOutlineArrowRight/></span>
        </button>
        </div>
    </div>
    
    </div>
    
)
}

export default About