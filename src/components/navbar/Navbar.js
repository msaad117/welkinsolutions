import  React, { useEffect, useState }  from "react";
import { Link } from "react-router-dom";
import styles from './Navbar.module.css';
import companyLogo from "../../assets/companylogo.png"

function Navbar() {
    const [isClick, setIsClick] = useState(false);
    useEffect(() => {
        return () => { setIsClick(false)}; 
        console.log("in")// cleanup toggles value, if unmounted
      }, []);
    return (
        
        <div className={styles.MainContainer} >
            <div className={styles.logoContainer}>
                <img className={styles.logoImage} src={companyLogo} alt="company logo" />
            </div>
            <div style={{paddingRight:"30px"}}>
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
           <li style={{paddingBottom:"12px"}}>
                    <a style={{ textDecoration: 'none', listStyle: "none", color: "white" }} href={"/"}> Home </a>
                </li>
                <li style={{paddingBottom:"12px"}}>
                    <a style={{ textDecoration: 'none', color: "white" }} href={"/about"}>About</a>
                </li>
                <li style={{paddingBottom:"12px"}}>
                    <a style={{ textDecoration: 'none', color: "white" }} href={"/about"}>Products</a>
                </li>
                <li style={{paddingBottom:"12px"}}>
                    <a style={{ textDecoration: 'none', color: "white" }} href={"/about"}>Services</a>
                </li>
                <li style={{paddingBottom:"12px"}}>
                    <a style={{ textDecoration: 'none', color: "white" }} href={"/about"}>Contact</a>
                </li>
        </div>
      )}
            <div className={styles.navbar}>
                <li>
                    <Link style={{ textDecoration: 'none', listStyle: "none", color: "#164057" }} to={"/"}> Home </Link>
                </li>
                <li>
                    <Link style={{ textDecoration: 'none', color: "#164057" }} to={"/about"}>About</Link>
                </li>
                <li>
                    <Link style={{ textDecoration: 'none', color: "#164057" }} to={"/about"}>Products</Link>
                </li>
                <li>
                    <Link style={{ textDecoration: 'none', color: "#164057" }} to={"/about"}>Services</Link>
                </li>
                <li>
                    <Link style={{ textDecoration: 'none', color: "#164057" }} to={"/about"}>Contact</Link>
                </li>
            </div>
        </div>

    )
}

export default Navbar