import React from "react";
import Marquee from "react-fast-marquee";
// import Profile1 from "../../assets/Clients/logo1.png"
import Profile2 from "../../assets/Clients/test2.png"
import Profile3 from "../../assets/Clients/3-highnoon-laboratories-limited.jpg"
import Profile4 from "../../assets/Clients/4-PAF.png"
import Profile5 from "../../assets/Clients/5-ccl.png"
import Profile6 from "../../assets/Clients/6-Coats.png" 
import Profile7 from "../../assets/Clients/7-US Apparel & Textile.png"
// import Profile8 from "../../assets/Clients/8-Longlife.png" 
import Profile9 from "../../assets/Clients/9-byonyks logo.png"
import Profile10 from "../../assets/Clients/10-Mehmood Group.jpg"
import Profile11 from "../../assets/Clients/11-interloop.jpg"
// import Profile12 from "../../assets/Clients/12-Nutribel (Pvt.) Ltd.jpg"
// import Profile13 from "../../assets/Clients/13-unilever.png"
// import Profile14 from "../../assets/Clients/14-Live Well Capsule.jpg"
// import Profile15 from "../../assets/Clients/14-Taiga Apparel.png"
// import Profile16 from "../../assets/Clients/15-Hi-tech Allay Wheels Ltd..jpg"
// import Profile17 from "../../assets/Clients/16-Coca_Cola.jpg"
import Profile18 from "../../assets/Clients/16-GlaxoSmithKline.jpg" 
// import Profile19 from "../../assets/Clients/18-Pakistan Navy.png" 
// import Profile20 from "../../assets/Clients/19-pepsi.png" 
// import Profile21 from "../../assets/Clients/20-Abbott Laboratories.jpg"  
// import Profile22 from "../../assets/Clients/21-GMSA.png"   
// import Profile23 from "../../assets/Clients/Al Aziz Group of Companies.png"
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
      <div style={{"width":"90%","margin":"auto","textAlign":"center"}}>
        <h2 style={styles.h2}>Our Clients</h2>
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
      {/* <div ><img src={Profile1}></img></div> */}
      <div className={styles.imgdiv}><img src={Profile2}></img></div>
      <div className={styles.imgdiv}><img src={Profile3}></img></div>
      <div className={styles.imgdiv}><img src={Profile4}></img></div>
      <div className={styles.imgdiv}><img src={Profile5}></img></div> 
      <div className={styles.imgdiv}><img src={Profile6}></img></div> 
      <div className={styles.imgdiv}><img src={Profile7}></img></div>
      {/* <div ><img src={Profile8}></img></div> */}
      <div className={styles.imgdiv}><img src={Profile9}></img></div>
      <div className={styles.imgdiv}><img src={Profile10}></img></div>
      <div className={styles.imgdiv}><img src={Profile11}></img></div>
      {/* <div ><img src={Profile12}></img></div> */}
      {/* <div ><img src={Profile13}></img></div> */}
      {/* <div ><img src={Profile14}></img></div> */}
      {/* <div ><img src={Profile15}></img></div> */}
      {/* <div ><img src={Profile16}></img></div> */}
      {/* <div ><img src={Profile17}></img></div> */}
      <div className={styles.imgdiv}><img src={Profile18}></img></div>
      {/* <div ><img src={Profile19}></img></div> */}
      {/* <div ><img src={Profile20}></img></div> */}
      {/* <div ><img src={Profile21}></img></div>
      <div ><img src={Profile22}></img></div>
      <div ><img src={Profile23}></img></div> */}
      </Marquee>
      </div>
      );
}
