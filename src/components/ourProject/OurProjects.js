import React from "react";
import project1 from "../../assets/Projects/1-Interloop Limited.jpeg"
import project2 from "../../assets/Projects/2- Fazal Rehman Fabrics Limited.jpeg"
import project3 from "../../assets/Projects/3- MG Apparel.png"
import project4 from "../../assets/Projects/4- Style Textile.jpeg"
import project5 from "../../assets/Projects/5- Sami Pharmacueticals.png"
import project6 from "../../assets/Projects/6- Nabi Qasim Industries.jpeg"
import Image from './image';
import styles from './OurProjects.module.css';

export default function OurProjects() {
  return (
    <div>
      <h2 style={{"fontSize":"32px"}}>Recent Projects</h2>
      <div className={styles.Cards}>
        <div className={styles.imageDiv}>
          <Image
            className={styles.imageDiv}
            Url={project1}

          />
          <div className={styles.overlay}>
            <div className={styles.cardTextDiv}>Interloop Limited</div>
          </div>
        </div>
        <div className={styles.imageDiv}>
          <Image
            className={styles.imageDiv}
            Url={project2}

          />
          <div className={styles.overlay}>
            <div className={styles.cardTextDiv}>Fazal Rehman Fabrics Limited</div>
          </div>
        </div>
        <div className={styles.imageDiv}>
          <Image
            className={styles.imageDiv}
            Url={project3}

          />
          <div className={styles.overlay}>
            <div className={styles.cardTextDiv}>MG Apparel</div>
          </div>
        </div>
        <div className={styles.imageDiv}>
          <Image
            className={styles.imageDiv}
            Url={project4}

          />
          <div className={styles.overlay}>
            <div className={styles.cardTextDiv}>Style Textile</div>
          </div>
        </div>
        <div className={styles.imageDiv}>
          <Image
            Url={project5}

          />
          <div className={styles.overlay}>
            <div className={styles.cardTextDiv}>Sami Pharmacueticals</div>
          </div>
        </div>
        <div className={styles.imageDiv}>
        <Image
          Url={project6}

        />
        <div className={styles.overlay}>
          <div className={styles.cardTextDiv}>Nabi Qasim Industries</div>
        </div>
        </div>
      </div>
    </div>
  );
}
