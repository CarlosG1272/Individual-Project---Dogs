import React from "react"; 
import { Link } from "react-router-dom";
import styles from "./landing.module.css"

export default class LandingPage extends React.Component{
    render(){
        return(
            <section className={styles.container}>
                <div 
                className={styles.title}>Hi! Welcome to this FULL STACK DOG APPLICATION. </div>

                <div className={styles.text}>
                In this app you will find information about man's best friend, that's right I'm talking about dogs! 
                </div>

                <div id={styles.start}>
                    <Link to={"/home"} >
                        
                        <img 
                        id={styles.fingerprint}
                        src={require("../../imgs/fingerprint.png").default}
                        alt="fingerprint-icon"
                        width={"150"}
                        />
                        <div id={styles.button}>Let´s GO!</div>
                    </Link>
                </div>
            </section>
        )
    }
}