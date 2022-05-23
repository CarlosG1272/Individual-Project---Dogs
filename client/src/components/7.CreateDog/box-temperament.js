import React from 'react';
import styles from "./box.module.css"

export default class BoxTemperament extends React.Component {

    render() {
        let temperament = this.props.temperament
        let deleteTemperament = this.props.deleteTemperament
        return (    
            <section className={styles.container}>
                <div id={styles.buttonContainer}>
                    <button id={styles.button}
                    onClick={(e)=> deleteTemperament(e, temperament)}>X</button>
                </div>
                <div id={styles.text}>
                    {temperament}
                </div>
            </section>
        );
    }
}

