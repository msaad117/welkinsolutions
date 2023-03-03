import * as React from "react";
import styles from './Projects.module.css';
import ImageCard from '../common/ImageCard';
import image1 from "../../assets/ProjectsPage/1-Interloop Limited.jpeg"
import image2 from "../../assets/ProjectsPage/2- Fazal Rehman Fabrics Limited.jpeg"
import image3 from "../../assets/ProjectsPage/3- MG Apparel.png"
import image4 from "../../assets/ProjectsPage/4- Style Textile.jpeg"
import image5 from "../../assets/ProjectsPage/5- Sami Pharmacueticals.png"
import image6 from "../../assets/ProjectsPage/6- Nabi Qasim Industries.jpeg"
import image7 from "../../assets/ProjectsPage/7- Elsewedy Electric.jpg"
import image8 from "../../assets/ProjectsPage/8-Millat Tractors Limited.jpeg"
import image9 from "../../assets/ProjectsPage/9- MN Textile.jpg"
import image10 from "../../assets/ProjectsPage/10- Siddiqsons Limited.jpg"
import image11 from "../../assets/ProjectsPage/12- Agha Khan Hospital.jpeg"
import image12 from "../../assets/ProjectsPage/13- Martin Dow.jpeg"
import image13 from "../../assets/ProjectsPage/13- US Apparel.png"
import image14 from "../../assets/ProjectsPage/14- Millennium Engineering (Pvt.) Ltd..jpeg"
import image15 from "../../assets/ProjectsPage/15- Outfitters.png"
import image16 from "../../assets/ProjectsPage/17- Ocean Cermics.jpeg"
import image17 from "../../assets/ProjectsPage/18- Highnoon Laboratories.JPG"
import image18 from "../../assets/ProjectsPage/19- Amazon Mall.png"
import image19 from "../../assets/ProjectsPage/19- Sayyed HealthCare Limited.png"
import image20 from "../../assets/ProjectsPage/21- Pakistan Air Force.png"
import image21 from "../../assets/ProjectsPage/22-, Abbot Labortories.jpg"
import image22 from "../../assets/ProjectsPage/23- Tetra Pak.jpg"
import image23 from "../../assets/ProjectsPage/24- PABCL.jpeg"
import image24 from "../../assets/ProjectsPage/25- Fauji Foods.jpeg"
import image25 from "../../assets/ProjectsPage/26- Emporium Mall.jpg"
import image26 from "../../assets/ProjectsPage/27- GSK.jpg"
import image27 from "../../assets/ProjectsPage/28- Benazir Bhutto International Airport.jpeg"

import { Helmet } from "react-helmet";

function Projects() {


  return (
    <div>
      <Helmet>
        <title>Welkin Solutions (Pvt.) Ltd</title>
        <meta name="description" content="We as central air conditioning company is working with national & multinational companies in Pakistan. Some of our clients Style Textile, Interloop, Unilever, Nestle, Sami Pharma, Abbot laboratories, Tetra Pak, Sayyed HealthCare and many more." />
        <meta name="keywords" content="central air conditioning companies in Pakistan, central air conditioning in Lahore, central air conditioning companies in Karachi, HVAC projects in Pakistan,Central air conditioning companies in Lahore" />

      </Helmet>
      <div className={styles.mainStyle}>
        <div style={{ backgroundColor: "#164057", "height": "50px" }}>
          <h2 style={{ textAlign: "center", "paddingTop": "6px", "color": "white" }}>Our Projects</h2>
        </div>
      </div>
      <div className={styles.Cards}>
        <div className={styles.imageDiv}>
          <ImageCard
            imageUrl={image1}
            imageAlt={"cleanroom image"}
          />
          <div>

            <p className={styles.textImageinner}>
              <p style={{ fontSize: "27px" ,paddingTop: "5px",fontWeight: "1000"}}>
              Interloop Limited
              </p>
              {/* <ReadMoreReact text={text}
                min={40}
                // ideal={30}
                max={50}
                readMoreText=" read more"/> */}
              
            </p>
          </div>
        </div>
        <div className={styles.imageDiv}>
          <ImageCard
            imageUrl={image2}
            imageAlt={"cleanroom image"}
          />
          <div>

            <p className={styles.textImageinner}>
              <p style={{ fontSize: "27px" ,paddingTop: "5px",fontWeight: "1000"}}>
              Fazal Rehman Fabrics Limited
              </p>
              {/* <ReadMoreReact text={text}
                min={40}
                // ideal={30}
                max={50}
                readMoreText=" read more"/> */}

            </p>
          </div>
        </div>
        <div className={styles.imageDiv}>
          <ImageCard
            imageUrl={image3}
            imageAlt={"cleanroom image"}
          />
          <div>

            <p className={styles.textImageinner}>
              <p style={{ fontSize: "27px" ,paddingTop: "5px",fontWeight: "1000"}}>
              MG Apparel
              </p>
              {/* <ReadMoreReact text={text}
                min={40}
                // ideal={30}
                max={50}
                readMoreText=" read more"/> */}
            </p>
          </div>
        </div>
        <div className={styles.imageDiv}>
          <ImageCard
            imageUrl={image4}
            imageAlt={"cleanroom image"}
          />
          <div>

            <p className={styles.textImageinner}>
              <p style={{ fontSize: "27px" ,paddingTop: "5px",fontWeight: "1000"}}>
              Style Textile
              </p>
              {/* <ReadMoreReact text={text}
                min={40}
                // ideal={30}
                max={50}
                readMoreText=" read more"/> */}
            </p>
          </div>
        </div>
        <div className={styles.imageDiv}>
          <ImageCard
            imageUrl={image5}
            imageAlt={"cleanroom image"}
          />
          <div>

            <p className={styles.textImageinner}>
              <p style={{ fontSize: "27px" ,paddingTop: "5px",fontWeight: "1000"}}>
              Sami Pharmacueticals
              </p>
              {/* <ReadMoreReact text={text}
                min={40}
                // ideal={30}
                max={50}
                readMoreText=" read more"/> */}
            </p>
          </div>
        </div>
        <div className={styles.imageDiv}>
          <ImageCard
            imageUrl={image6}
            imageAlt={"cleanroom image"}
          />
          <div>

            <p className={styles.textImageinner}>
              <p style={{ fontSize: "27px" ,paddingTop: "5px",fontWeight: "1000"}}>
              Nabi Qasim Industries
              </p>
              {/* <ReadMoreReact text={text}
                min={40}
                // ideal={30}
                max={50}
                readMoreText=" read more"/> */}
            </p>
          </div>
        </div>
        <div className={styles.imageDiv}>
          <ImageCard
            imageUrl={image7}
            imageAlt={"cleanroom image"}
          />
          <div>

            <p className={styles.textImageinner}>
              <p style={{ fontSize: "27px" ,paddingTop: "5px",fontWeight: "1000"}}>
              Elsewedy Electric
              </p>
              {/* <ReadMoreReact text={text}
                min={40}
                // ideal={30}
                max={50}
                readMoreText=" read more"/> */}
            </p>
          </div>
        </div>
        <div className={styles.imageDiv}>
          <ImageCard
            imageUrl={image8}
            imageAlt={"cleanroom image"}
          />
          <div>

            <p className={styles.textImageinner}>
              <p style={{ fontSize: "27px" ,paddingTop: "5px",fontWeight: "1000"}}>
              Millat Tractors Limited
              </p>
              {/* <ReadMoreReact text={text}
                min={40}
                // ideal={30}
                max={50}
                readMoreText=" read more"/> */}
            </p>
          </div>
        </div>
        <div className={styles.imageDiv}>
          <ImageCard
            imageUrl={image9}
            imageAlt={"cleanroom image"}
          />
          <div>

            <p className={styles.textImageinner}>
              <p style={{ fontSize: "27px" ,paddingTop: "5px",fontWeight: "1000"}}>
              MN Textile
              </p>
              {/* <ReadMoreReact text={text}
                min={40}
                // ideal={30}
                max={50}
                readMoreText=" read more"/> */}
            </p>
          </div>
        </div>
        <div className={styles.imageDiv}>
          <ImageCard
            imageUrl={image10}
            imageAlt={"cleanroom image"}
          />
          <div>

            <p className={styles.textImageinner}>
              <p style={{ fontSize: "27px" ,paddingTop: "5px",fontWeight: "1000"}}>
              Siddiqsons Limited
              </p>
              {/* <ReadMoreReact text={text}
                min={40}
                // ideal={30}
                max={50}
                readMoreText=" read more"/> */}
            </p>
          </div>
        </div>
        <div className={styles.imageDiv}>
          <ImageCard
            imageUrl={image11}
            imageAlt={"cleanroom image"}
          />
          <div>

            <p className={styles.textImageinner}>
              <p style={{ fontSize: "27px" ,paddingTop: "5px",fontWeight: "1000"}}>
              Agha Khan Hospital
              </p>
              {/* <ReadMoreReact text={text}
                min={40}
                // ideal={30}
                max={50}
                readMoreText=" read more"/> */}
            </p>
          </div>
        </div>
        <div className={styles.imageDiv}>
          <ImageCard
            imageUrl={image12}
            imageAlt={"cleanroom image"}
          />
          <div>

            <p className={styles.textImageinner}>
              <p style={{ fontSize: "27px" ,paddingTop: "5px",fontWeight: "1000"}}>
              Martin Dow
              </p>
              {/* <ReadMoreReact text={text}
                min={40}
                // ideal={30}
                max={50}
                readMoreText=" read more"/> */}
            </p>
          </div>
        </div>
        <div className={styles.imageDiv}>
          <ImageCard
            imageUrl={image13}
            imageAlt={"cleanroom image"}
          />
          <div>

            <p className={styles.textImageinner}>
              <p style={{ fontSize: "27px" ,paddingTop: "5px",fontWeight: "1000"}}>
              US Apparel
              </p>
              {/* <ReadMoreReact text={text}
                min={40}
                // ideal={30}
                max={50}
                readMoreText=" read more"/> */}
            </p>
          </div>
        </div>
        <div className={styles.imageDiv}>
          <ImageCard
            imageUrl={image14}
            imageAlt={"cleanroom image"}
          />
          <div>

            <p className={styles.textImageinner}>
              <p style={{ fontSize: "27px" ,paddingTop: "5px",fontWeight: "1000"}}>
              Millennium Engineering  Ltd
              </p>
              {/* <ReadMoreReact text={text}
                min={40}
                // ideal={30}
                max={50}
                readMoreText=" read more"/> */}
            </p>
          </div>
        </div>
        <div className={styles.imageDiv}>
          <ImageCard
            imageUrl={image15}
            imageAlt={"cleanroom image"}
          />
          <div>

            <p className={styles.textImageinner}>
              <p style={{ fontSize: "27px" ,paddingTop: "5px",fontWeight: "1000"}}>
              Outfitters
              </p>
              {/* <ReadMoreReact text={text}
                min={40}
                // ideal={30}
                max={50}
                readMoreText=" read more"/> */}
            </p>
          </div>
        </div>
        <div className={styles.imageDiv}>
          <ImageCard
            imageUrl={image16}
            imageAlt={"cleanroom image"}
          />
          <div>

            <p className={styles.textImageinner}>
              <p style={{ fontSize: "27px" ,paddingTop: "5px",fontWeight: "1000"}}>
              Ocean Cermics
              </p>
              {/* <ReadMoreReact text={text}
                min={40}
                // ideal={30}
                max={50}
                readMoreText=" read more"/> */}
            </p>
          </div>
        </div>
        <div className={styles.imageDiv}>
          <ImageCard
            imageUrl={image17}
            imageAlt={"cleanroom image"}
          />
          <div>

            <p className={styles.textImageinner}>
              <p style={{ fontSize: "27px" ,paddingTop: "5px",fontWeight: "1000"}}>
              Highnoon Laboratories
              </p>
              {/* <ReadMoreReact text={text}
                min={40}
                // ideal={30}
                max={50}
                readMoreText=" read more"/> */}
            </p>
          </div>
        </div>
        <div className={styles.imageDiv}>
          <ImageCard
            imageUrl={image18}
            imageAlt={"cleanroom image"}
          />
          <div>

            <p className={styles.textImageinner}>
              <p style={{ fontSize: "27px" ,paddingTop: "5px",fontWeight: "1000"}}>
              Amazon Mall
              </p>
              {/* <ReadMoreReact text={text}
                min={40}
                // ideal={30}
                max={50}
                readMoreText=" read more"/> */}
            </p>
          </div>
        </div>
        <div className={styles.imageDiv}>
          <ImageCard
            imageUrl={image19}
            imageAlt={"cleanroom image"}
          />
          <div>

            <p className={styles.textImageinner}>
              <p style={{ fontSize: "27px" ,paddingTop: "5px",fontWeight: "1000"}}>
              Sayyed HealthCare Limited
              </p>
              {/* <ReadMoreReact text={text}
                min={40}
                // ideal={30}
                max={50}
                readMoreText=" read more"/> */}
            </p>
          </div>
        </div>
        <div className={styles.imageDiv}>
          <ImageCard
            imageUrl={image20}
            imageAlt={"cleanroom image"}
          />
          <div>

            <p className={styles.textImageinner}>
              <p style={{ fontSize: "27px" ,paddingTop: "5px",fontWeight: "1000"}}>
              Pakistan Air Force
              </p>
              {/* <ReadMoreReact text={text}
                min={40}
                // ideal={30}
                max={50}
                readMoreText=" read more"/> */}
            </p>
          </div>
        </div>
        <div className={styles.imageDiv}>
          <ImageCard
            imageUrl={image21}
            imageAlt={"cleanroom image"}
          />
          <div>

            <p className={styles.textImageinner}>
              <p style={{ fontSize: "27px" ,paddingTop: "5px",fontWeight: "1000"}}>
              Abbot Labortories
              </p>
              {/* <ReadMoreReact text={text}
                min={40}
                // ideal={30}
                max={50}
                readMoreText=" read more"/> */}
            </p>
          </div>
        </div>
        <div className={styles.imageDiv}>
          <ImageCard
            imageUrl={image22}
            imageAlt={"cleanroom image"}
          />
          <div>

            <p className={styles.textImageinner}>
              <p style={{ fontSize: "27px" ,paddingTop: "5px",fontWeight: "1000"}}>
              Tetra Pak
              </p>
              {/* <ReadMoreReact text={text}
                min={40}
                // ideal={30}
                max={50}
                readMoreText=" read more"/> */}
            </p>
          </div>
        </div>
        <div className={styles.imageDiv}>
          <ImageCard
            imageUrl={image23}
            imageAlt={"cleanroom image"}
          />
          <div>

            <p className={styles.textImageinner}>
              <p style={{ fontSize: "27px" ,paddingTop: "5px",fontWeight: "1000"}}>
              PABCL
              </p>
              {/* <ReadMoreReact text={text}
                min={40}
                // ideal={30}
                max={50}
                readMoreText=" read more"/> */}
            </p>
          </div>
        </div>
        <div className={styles.imageDiv}>
          <ImageCard
            imageUrl={image24}
            imageAlt={"cleanroom image"}
          />
          <div>

            <p className={styles.textImageinner}>
              <p style={{ fontSize: "27px" ,paddingTop: "5px",fontWeight: "1000"}}>
              Fauji Foods
              </p>
              {/* <ReadMoreReact text={text}
                min={40}
                // ideal={30}
                max={50}
                readMoreText=" read more"/> */}
            </p>
          </div>
        </div>
        <div className={styles.imageDiv}>
          <ImageCard
            imageUrl={image25}
            imageAlt={"cleanroom image"}
          />
          <div>

            <p className={styles.textImageinner}>
              <p style={{ fontSize: "27px" ,paddingTop: "5px",fontWeight: "1000"}}>
              Emporium Mall
              </p>
              {/* <ReadMoreReact text={text}
                min={40}
                // ideal={30}
                max={50}
                readMoreText=" read more"/> */}
            </p>
          </div>
        </div>
        <div className={styles.imageDiv}>
          <ImageCard
            imageUrl={image26}
            imageAlt={"cleanroom image"}
          />
          <div>

            <p className={styles.textImageinner}>
              <p style={{ fontSize: "27px" ,paddingTop: "5px",fontWeight: "1000"}}>
              GSK
              </p>
              {/* <ReadMoreReact text={text}
                min={40}
                // ideal={30}
                max={50}
                readMoreText=" read more"/> */}
            </p>
          </div>
        </div>
        <div className={styles.imageDiv}>
          <ImageCard
            imageUrl={image27}
            imageAlt={"cleanroom image"}
          />
          <div>

            <p className={styles.textImageinner}>
              <p style={{ fontSize: "27px" ,paddingTop: "5px",fontWeight: "1000"}}>
              Benazir Bhutto International Airport
              </p>
              {/* <ReadMoreReact text={text}
                min={40}
                // ideal={30}
                max={50}
                readMoreText=" read more"/> */}
            </p>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Projects