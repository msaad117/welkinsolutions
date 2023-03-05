import React from 'react';

import styles from './image.module.css';
export default  function Image(props) {
    return (
      <div className={styles.imageCard}>
        <img   src={props.Url} alt={props.Alt} loading="lazy" />
        
      </div>
    );
  }
  