import React from 'react';
import styles from "./temperament.module.css"
export default function Temperament ({temperament}){
    return(<section>
        <div id={styles.circle}>
            <div id={styles.text}>
            {temperament}
            </div>       
        </div>
    </section>)
}