import React from 'react';
import './ImageGrid.css';
import ImageCard from '../common/ImageCard';
import image1 from "../../assets/ProjectsPage/1-Interloop Limited.jpeg"
import image2 from "../../assets/ProjectsPage/2- Fazal Rehman Fabrics Limited.jpeg"
import image3 from "../../assets/ProjectsPage/3- MG Apparel.png"
import image4 from "../../assets/ProjectsPage/4- Style Textile.jpeg"
import image5 from "../../assets/ProjectsPage/5- Sami Pharmacueticals.png"
import image6 from "../../assets/ProjectsPage/6- Nabi Qasim Industries.jpeg"
let images=[image1,image2,image3,image4,image5,image6]
const ImageGrid = () => {
  return (
    <div className="image-grid">
      {images.map((image, index) => (
        <div key={index} className="image-wrapper">
          <ImageCard  imageUrl={image2}
            imageAlt={"cleanroom image"}/>
          <p style={{"position":"relative",width:"262px"}}>
          Fazal Rehman Fabrics Limited
              {/* <ReadMoreReact text={text}
                min={40}
                // ideal={30}
                max={50}
                nnn
                readMoreText=" read more"/> */}

            </p>
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
