import React from "react";
import Marquee from "react-fast-marquee";
// import Profile1 from "../../assets/clients/logo1.png"
import Profile2 from "../../assets/clients/1-style textile.png"
import Profile3 from "../../assets/clients/2-Interloop.png"
import Profile4 from "../../assets/clients/3-Fazal Rehman Fabrics.png"
import Profile5 from "../../assets/clients/4-Mehmood Group.jpg"
// import Profile6 from "../../assets/clients/5-Elsewedy Electric.png" 
import Profile7 from "../../assets/clients/5-Nishat Sutas Dairy Limited.png"
import Profile9 from "../../assets/clients/5-US Apparel.png"
import Profile10 from "../../assets/clients/6-Coats.png"
import Profile11 from "../../assets/clients/6 - MN Textile.jpeg"
import Profile12 from "../../assets/clients/6-Taiga Apparel.png"
import Profile13 from "../../assets/clients/7-Sami-icon.png"
import Profile14 from "../../assets/clients/8- Dr. Ziauddin.png"
import Profile15 from "../../assets/clients/8-Highnoon-laboratories-limited.jpg"
import Profile16 from "../../assets/clients/8-Sayyed HealthCare.png"
import Profile17 from "../../assets/clients/9-Abbott Laboratories.jpg"
import Profile18 from "../../assets/clients/9-Nabiqasim.jpg" 
import Profile19 from "../../assets/clients/9-PAF.png" 
import Profile20 from "../../assets/clients/10- CCL.png" 
import Profile21 from "../../assets/clients/11-byonyks logo.png"  
import Profile22 from "../../assets/clients/11-GlaxoSmithKline.jpg"   
// import Profile23 from "../../assets/clients/12-Longlife.png"
import Profile24 from "../../assets/clients/12-Nutribel (Pvt.) Ltd..jpg"
import Profile25 from "../../assets/clients/13- MEPL.jpeg"
import Profile26 from "../../assets/clients/13-Nestle.png"
import Profile27 from "../../assets/clients/13-unilever.png"
import Profile28 from "../../assets/clients/14-Amazon-mall.png"
// import Profile29 from "../../assets/clients/14-Live Well Capsule.jpg"
import Profile30 from "../../assets/clients/15-Fauji Foods.png"
// import Profile31 from "../../assets/clients/15-Hi-tech Allay Wheels Ltd..jpg"
import Profile32 from "../../assets/clients/16-Coca_Cola.jpg"
import Profile33 from "../../assets/clients/17-Pakistan Security Printing Corporation.png"
import Profile34 from "../../assets/clients/18-Pakistan Navy.png"
import Profile35 from "../../assets/clients/19-pepsi.png"
import Profile36 from "../../assets/clients/21-GMSA.png"
import styles from './LoopSlider.module.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1100, min: 801 },
    items: 3,
    slidesToSlide: 1 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 800, min: 0 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
export default function LoopSlider() {
    return (
      <div style={{"width":"90%","margin":"auto","textAlign":"center",marginBottom:"30px"}}>
        <h2 style={styles.h2}>Our clients</h2>
      <Marquee
      swipeable={false}
      draggable={false}
      showDots={false}
      
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={ true }
      autoPlaySpeed={1000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={1000}
      // containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile","desktop"]}
      // itemClass="carousel-item-padding-90-px"
    >
      <div className={styles.imgdiv}><img src={Profile2}></img></div>
      <div className={styles.imgdiv}><img src={Profile3}></img></div>
      <div className={styles.imgdiv}><img style={{"paddingTop":"42px"}} src={Profile4}></img></div>
      <div className={styles.imgdiv}><img src={Profile5}></img></div> 
      {/* <div className={styles.imgdiv}><img src={Profile6}></img></div>  */}
      <div className={styles.imgdiv}><img src={Profile7}></img></div>
      <div className={styles.imgdiv}><img src={Profile9}></img></div>
      <div className={styles.imgdiv}><img src={Profile10}></img></div>
      <div className={styles.imgdiv}><img src={Profile11}></img></div>
      <div className={styles.imgdiv} ><img style={{"paddingTop":"42px"}} src={Profile12}></img></div> 
       <div className={styles.imgdiv}><img src={Profile13}></img></div> 
       <div className={styles.imgdiv}><img style={{"paddingTop":"42px"}} src={Profile14}></img></div> 
       <div className={styles.imgdiv}><img src={Profile15}></img></div> 
       <div className={styles.imgdiv} ><img src={Profile16}></img></div> 
       <div className={styles.imgdiv}><img  style={{"paddingTop":"42px"}} src={Profile17}></img></div>
      <div className={styles.imgdiv}><img src={Profile18}></img></div>
       <div className={styles.imgdiv}><img src={Profile19}></img></div> 
       <div className={styles.imgdiv}>< img style={{"paddingTop":"42px"}} src={Profile20}></img></div> 
       <div className={styles.imgdiv}><img style={{"paddingTop":"42px"}} src={Profile21}></img></div>
      <div className={styles.imgdiv}><img src={Profile22}></img></div>
      {/* <div className={styles.imgdiv}><img src={Profile23}></img></div>  */}
      <div className={styles.imgdiv}><img  style={{"paddingTop":"42px"}} src={Profile24}></img></div> 
      <div className={styles.imgdiv}><img src={Profile25}></img></div> 
      <div className={styles.imgdiv}><img style={{"paddingTop":"42px"}} src={Profile26}></img></div> 
      <div className={styles.imgdiv}><img src={Profile27}></img></div> 
      <div className={styles.imgdiv}><img style={{"paddingTop":"42px"}} src={Profile28}></img></div> 
      {/* <div className={styles.imgdiv}><img src={Profile29}></img></div>  */}
      <div className={styles.imgdiv}><img style={{"paddingTop":"42px"}} src={Profile30}></img></div> 
      {/* <div className={styles.imgdiv}><img src={Profile31}></img></div>  */}
      <div className={styles.imgdiv}><img style={{"paddingTop":"42px"}}src={Profile32}></img></div> 
      {/* <div className={styles.imgdiv}><img src={Profile33}></img></div>  */}
      <div className={styles.imgdiv}><img src={Profile34}></img></div> 
      <div className={styles.imgdiv}><img src={Profile35}></img></div> 
      <div className={styles.imgdiv}><img  style={{"paddingTop":"42px"}} src={Profile36}></img></div> 
      </Marquee>
      </div>
      );
}
