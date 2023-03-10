import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from './Navbar.module.css';
import companyLogo from "../../assets/companylogo.png"
import { AiFillCaretDown, AiFillCaretRight, AiFillCaretUp,AiFillCloseCircle } from "react-icons/ai";
function Navbar() {
    const [isClick, setIsClick] = useState(false);
    const [isServiceClicked, setIsServiceClick] = useState(false);
    const [isProductClicked, setIsProductClick] = useState(false);
    const [isInnerProductClicked, setIsInnerProductClick] = useState(false);
    useEffect(() => {
        return () => { setIsClick(false) };
    }, []);
    useEffect(() => {
        return () => { setIsServiceClick(false) };
    }, []);
    useEffect(() => {
        return () => { setIsProductClick(false) };
    }, []);
    useEffect(() => {
        return () => { setIsInnerProductClick(false) };
    }, []);
    const handleChildElementClick = (e) => {
        e.stopPropagation()
        setIsInnerProductClick(!isInnerProductClicked)
     }
    return (

        <div className={styles.MainContainer} >
            <div className={styles.logoContainer}>
                <a href='/'>
                <img className={styles.logoImage} src={companyLogo} alt="company logo" />
                </a>
            </div>
            <div style={{ paddingRight: "30px" }}>
                <button
                    className={styles.hamburger}
                    onClick={() => setIsClick(!isClick)}
                >

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="white"
                    >
                        <path
                            fillRule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>
            {isClick && (
                <div className={styles.mobileBar}>
                    {/* <span  style={{"fontSize":"45px",display:"flex",justifyContent:"end","paddingTop":"2px"}} onClick={() => setIsClick(!isClick)}><AiFillCloseCircle/></span> */}
                    <div style={{ paddingRight: "30px",paddingBottom:"40px" }}>
                <button
                    className={styles.hamburger}
                    onClick={() => setIsClick(!isClick)}
                >

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="white"
                    >
                        <path
                            fillRule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>
                    <li style={{ paddingBottom: "12px"  }}>
                        <a style={{ textDecoration: 'none', listStyle: "none", color: "white" }} href={"/"}> Home </a>
                    </li>
                    {/* <li className={styles.mobileServicetag} onClick={() => setIsServiceClick(!isServiceClicked)}>
                        <a style={{ textDecoration: 'none', color: "white" }} >Services  <span>{isServiceClicked ?<AiFillCaretUp />:<AiFillCaretDown />}</span></a>
                        <div className={styles.mobilemaindropdownMenu}>
                            <li className={styles.InnerServiceTagoption2}> <Link to={"/services"}>HVAC
                            </Link>
                            </li>
                            <li> <Link className={styles.InnerServicetag} to={"/services"}>Clean Room Solutions </Link></li>
                            <li> <Link className={styles.InnerServicetag} to={"/services"}>BMS </Link></li>
                        </div>
                    </li> */}

                    {/* {!isServiceClicked ? <li className={styles.mobileServicetag} onClick={() => setIsServiceClick(!isServiceClicked)}>
                        <a style={{ textDecoration: 'none', color: "white" ,display:"flex"}} >Services  <span style={{"paddingLeft":"20px","paddingTop":"4px"}}>{isServiceClicked ? < AiFillCaretUp /> : <AiFillCaretDown />}</span></a>

                    </li> : <li className={styles.mobileServicetag} onClick={() => setIsServiceClick(!isServiceClicked)}>
                        <a style={{ textDecoration: 'none', color: "white" ,display:"flex"}} >Services  <span style={{"paddingLeft":"20px","paddingTop":"4px"}}>{isServiceClicked ? <AiFillCaretUp /> : <AiFillCaretDown />}</span></a>
                        <div className={styles.mobilemaindropdownMenu}>
                            <li className={styles.InnerServicetagmobile}> <Link to={"/services"}>HVAC
                            </Link>
                            </li>
                            <li className={styles.InnerServicetagmobile}>  <a  href={"/services"}>Clean Room Solutions </a></li>
                        </div>
                    </li>} */}
                    <li style={{ paddingBottom: "12px"  }}>
                        <a style={{ textDecoration: 'none', listStyle: "none", color: "white" }} href={"/projects"}> Projects </a>
                    </li>
                    {!isProductClicked ? <li className={styles.mobileServicetag} onClick={() => setIsProductClick(!isProductClicked)}>
                        <a style={{ textDecoration: 'none', color: "white" ,display:"flex"}} >Products  <span style={{"paddingLeft":"16px","paddingTop":"4px"}}>{isProductClicked ? <AiFillCaretUp /> : <AiFillCaretDown />}</span></a>

                    </li> : 
                    <li className={styles.mobileServicetag} onClick={() => setIsProductClick(!isProductClicked)}>
                        <a style={{ textDecoration: 'none', color: "white" ,display:"flex"}} >Products  <span style={{"paddingLeft":"16px","paddingTop":"4px"}}>{isProductClicked ? <AiFillCaretUp /> : <AiFillCaretDown />}</span></a>
                        <div className={styles.mobilemaindropdownMenu}>
                            {!isInnerProductClicked ? <li className={styles.InnerServicetagmobile} onClick={(e) => handleChildElementClick(e)}>
                        <Link  to={"/Products/hvacproducts"} style={{ display:"flex"}} >  HVAC <span style={{paddingTop:"2px"}}>{isInnerProductClicked ? <AiFillCaretUp /> : <AiFillCaretDown />}</span></Link>
                          
                    </li> : <li className={styles.InnerServicetagmobile} onClick={(e) => handleChildElementClick(e)}>
                        <Link to={"/Products/hvacproducts"}>HVAC <span style={{paddingTop:"2px"}}>{isInnerProductClicked ? <AiFillCaretUp /> : <AiFillCaretDown />}</span>
                        <div className={styles.mobilemaindropdownInnerMenu}>
                            <li className={styles.InnerServicetagmobile}> <Link  to={"/products/hvac/chillers"}>Chillers  </Link></li>
                                    <li className={styles.InnerServicetagmobile}> <Link  to={"/products/hvac/air-handling-units"}>Air Handling Units</Link></li>
                                    <li className={styles.InnerServicetagmobile}> <Link  to={"/products/hvac/fcus"}>Fan Coil Units </Link></li>
                                    <li className={styles.InnerServicetagmobile}> <Link  to={"/products/hvac/vrfsystem"}>VRF / VRV </Link></li>
                                    <li className={styles.InnerServicetagmobile}> <Link  to={"/products/hvac/rooftoppackageunits"}>Rooftop Package Units </Link></li>
                                    <li className={styles.InnerServicetagmobile}> <Link  to={"/products/hvac/datacentercooling"}>Precision Cooling / Data Center Cooling  </Link></li>
                                    <li className={styles.InnerServicetagmobile}> <Link  to={"/products/hvac/industrialventilationfans"}>Industrial Ventilation</Link></li>
                                    <li className={styles.InnerServicetagmobile}> <Link  to={"/products/hvac/Fabricduct"}>Fabric Duct </Link></li>
                        
                        </div>
                        </Link>
                    </li>}










                            <li className={styles.InnerServicetagmobile}> <a href={"/products/cleanroomsolutions"}>Clean Room Solutions </a></li>
                           
                        </div>
                    </li>}
                    
                    <li style={{ paddingBottom: "12px" }}>
                        <a style={{ textDecoration: 'none', color: "white" }} href={"/about"}>About</a>
                    </li>
                    <li style={{ paddingBottom: "12px" }}>
                        <a style={{ textDecoration: 'none', color: "white" }} href={"/contact"}>Contact</a>
                    </li>

                </div>
            )}
            <div className={styles.navbar}>
                
                <li>
                    <Link style={{ textDecoration: 'none', listStyle: "none", color: "#164057" }} to={"/"}> Home </Link>
                </li>
                <li>

                    <Link className={styles.Servicetag} to={"/projects"}>Projects 
                       
                    </Link>

                </li>
                <li>

                    <Link className={styles.Servicetag} >Products <AiFillCaretDown />
                        <div className={styles.maindropdownMenu}>
                            <li className={styles.InnerServiceTagoption2}> <Link to={"/Products/hvacproducts"}>HVAC <AiFillCaretRight />
                                <div className={styles.subdropdownMenu}>
                                    <li> <Link className={styles.InnerServicetag} to={"/products/hvac/chillers"}>Chillers  </Link></li>
                                    <li> <Link className={styles.InnerServicetag} to={"/products/hvac/air-handling-units"}>Air Handling Units</Link></li>
                                    <li> <Link className={styles.InnerServicetag} to={"/products/hvac/fcus"}>Fan Coil Units </Link></li>
                                    <li> <Link className={styles.InnerServicetag} to={"/products/hvac/vrfsystem"}>VRF/VRV </Link></li>
                                    <li> <Link className={styles.InnerServicetag} to={"/products/hvac/rooftoppackageunits"}>Rooftop Package Units </Link></li>
                                    <li> <Link className={styles.InnerServicetag} to={"/products/hvac/datacentercooling"}>Precision Cooling / Data Center Cooling  </Link></li>
                                    <li> <Link className={styles.InnerServicetag} to={"/products/hvac/industrialventilationfans"}>Industrial Ventilation</Link></li>
                                    <li> <Link className={styles.InnerServicetag} to={"/products/hvac/Fabricduct"}>Fabric Duct </Link></li>
                                </div>
                            </Link>
                            </li>
                            <li> <Link className={styles.InnerServicetag} to={"/products/cleanroomsolutions"}>Clean Room  </Link></li>
                            
                        </div>
                    </Link>

                </li>
                <li>
                    <Link style={{ textDecoration: 'none', color: "#164057" }} to={"/about"}>About</Link>
                </li>
                <li>
                    <Link style={{ textDecoration: 'none', color: "#164057" }} to={"/contact"}>Contact</Link>
                </li>
            </div>
        </div>

    )
}

export default Navbar