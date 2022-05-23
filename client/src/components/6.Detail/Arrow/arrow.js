import React from "react";
import styles from "./arrow.module.css"
export default function Arrow(){
    return(<div className={styles.container}>
    <div className={styles.content}>
      <p>Slide me !</p>
      <svg id={styles.more_arrows}>
        <polygon className={styles.arrow_top} points="37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 "/>
        <polygon className={styles.arrow_middle} points="37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 "/>
        <polygon className={styles.arrow_bottom} points="37.6,64 0,36.1 5.1,32.8 37.6,56.8 70.4,32.8 75.5,36.1 "/>
      </svg>
    </div>
  </div>)
}