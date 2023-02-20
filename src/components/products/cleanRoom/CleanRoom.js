import * as React from "react";
import styles from './CleanRoom.module.css';
import ImageCard from '../../our Businesses/ImageCard';
import image1 from "../../../assets/Cleanroom/1-Cleanroom Panels.jpeg"
import image2 from "../../../assets/Cleanroom/2-Cleanroom Windows.jpg"
import image3 from "../../../assets/Cleanroom/3-Cleanroom Ceiling Systems.jpg"
import image4 from "../../../assets/Cleanroom/4-Cleanroom Doors.jpg"
import image5 from "../../../assets/Cleanroom/5-Cleanroom Equipment.jpg"
import image6 from "../../../assets/Cleanroom/6-Cleanroom Accessaries.png"
import ReactReadMoreReadLess from "react-read-more-read-less";

function CleanRooms() {
    let text="Read More + React is a simple npm component for react that intelligently truncates text at the appropriate point given a min, an ideal, and max text length. The idea is to cut off at the best point, and not just a specific character, cutting words short "
    
    return(
    
    <div>
    <div style={{"textAlign":"center","width":"94%","height":"250px","marginLeft":"2%","marginRight":"2%","marginTop":"30px","marginBottom":"10px"}}>
     <div style={{backgroundColor:"#164057","height":"50px"}}>
      <h2 style={{textAlign:"center","paddingTop":"6px","color":"white"}}>Clean Room Solutions</h2>
     </div>
     <div className={styles.border}>
      <div className={styles.borderpadding}>
      <span >Clean room is a basic project with a wide range of application industries. In many engineering fields, clean space is needed to meet some high processing requirements of ISO standards.
</span>
<br/>
<span>
Welkin Solutions as cleanroom company specializing in the cleanroom design, supply, planning and cleanroom construction in Pakistan. Welkin has a team of professionals with cleanroom and pharma specialists who can understand the customer need more easily in the field of cleanroom.
      </span>
      </div>
      </div>
    </div>
    <div className={styles.Cards}>
    <div className={styles.imageDiv}>
        <ImageCard 
        imageUrl={image1}
        
      />
      <div>
      
      <p className={styles.textImageinner}>
      <p style={{fontSize:"24px"}}>
      Central Air-Conditioning 
      </p>
      {/* <ReadMoreReact text={text}
                min={40}
                // ideal={30}
                max={50}
                readMoreText=" read more"/> */}
                 <ReactReadMoreReadLess
                charLimit={50}
                readMoreText={"Read more ▼"}
                readLessText={"Read less ▲"}
                readMoreStyle={{fontWeight:"2500",color:"black"}}
                readLessStyle={{fontWeight:"2500",color:"black"}}
            >
                {text}
            </ReactReadMoreReadLess>
        
       </p>    
       </div>     
      </div>
      <div className={styles.imageDiv}>
        <ImageCard 
        imageUrl={image2}
        
      />
      <div>
      
      <p className={styles.textImageinner}>
      <p style={{fontSize:"24px"}}>
      Central Air-Conditioning 
      </p>
      {/* <ReadMoreReact text={text}
                min={40}
                // ideal={30}
                max={50}
                readMoreText=" read more"/> */}
                 <ReactReadMoreReadLess
                charLimit={50}
                readMoreText={"Read more ▼"}
                readLessText={"Read less ▲"}
                readMoreStyle={{fontWeight:"2500",color:"black"}}
                readLessStyle={{fontWeight:"2500",color:"black"}}
            >
                {text}
            </ReactReadMoreReadLess>
        
       </p>    
       </div>     
      </div>
      <div className={styles.imageDiv}>
        <ImageCard 
        imageUrl={image3}
        
      />
      <div>
      
      <p className={styles.textImageinner}>
      <p style={{fontSize:"24px"}}>
      Central Air-Conditioning 
      </p>
      {/* <ReadMoreReact text={text}
                min={40}
                // ideal={30}
                max={50}
                readMoreText=" read more"/> */}
                 <ReactReadMoreReadLess
                charLimit={50}
                readMoreText={"Read more ▼"}
                readLessText={"Read less ▲"}
                readMoreStyle={{fontWeight:"2500",color:"black"}}
                readLessStyle={{fontWeight:"2500",color:"black"}}
            >
                {text}
            </ReactReadMoreReadLess>
        
       </p>    
       </div>     
      </div>
      <div className={styles.imageDiv}>
        <ImageCard 
        imageUrl={image4}
        
      />
      <div>
      
      <p className={styles.textImageinner}>
      <p style={{fontSize:"24px"}}>
      Central Air-Conditioning 
      </p>
      {/* <ReadMoreReact text={text}
                min={40}
                // ideal={30}
                max={50}
                readMoreText=" read more"/> */}
                 <ReactReadMoreReadLess
                charLimit={50}
                readMoreText={"Read more ▼"}
                readLessText={"Read less ▲"}
                readMoreStyle={{fontWeight:"2500",color:"black"}}
                readLessStyle={{fontWeight:"2500",color:"black"}}
            >
                {text}
            </ReactReadMoreReadLess>
        
       </p>    
       </div>     
      </div>
      <div className={styles.imageDiv}>
        <ImageCard 
        imageUrl={image5}
        
      />
      <div>
      
      <p className={styles.textImageinner}>
      <p style={{fontSize:"24px"}}>
      Central Air-Conditioning 
      </p>
      {/* <ReadMoreReact text={text}
                min={40}
                // ideal={30}
                max={50}
                readMoreText=" read more"/> */}
                 <ReactReadMoreReadLess
                charLimit={50}
                readMoreText={"Read more ▼"}
                readLessText={"Read less ▲"}
                readMoreStyle={{fontWeight:"2500",color:"black"}}
                readLessStyle={{fontWeight:"2500",color:"black"}}
            >
                {text}
            </ReactReadMoreReadLess>
        
       </p>    
       </div>     
      </div>
      <div className={styles.imageDiv}>
        <ImageCard 
        imageUrl={image6}
        
      />
      <div>
      
      <p className={styles.textImageinner}>
      <p style={{fontSize:"24px"}}>
      Central Air-Conditioning 
      </p>
      {/* <ReadMoreReact text={text}
                min={40}
                // ideal={30}
                max={50}
                readMoreText=" read more"/> */}
                 <ReactReadMoreReadLess
                charLimit={50}
                readMoreText={"Read more ▼"}
                readLessText={"Read less ▲"}
                readMoreStyle={{fontWeight:"2500",color:"black"}}
                readLessStyle={{fontWeight:"2500",color:"black"}}
            >
                {text}
            </ReactReadMoreReadLess>
        
       </p>    
       </div>     
      </div>
    </div>
    </div>
    
)
}

export default CleanRooms