import React from 'react';
import './ImageCard.css';
export default  function ImageCard(props) {
    return (
      <div className="image-card">
        <img   src={props.imageUrl} alt={props.imageAlt} loading="lazy" />
        
      </div>
    );
  }
  