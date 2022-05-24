import React from "react"; 
import { Link } from "react-router-dom";
import Footer from "../Footer/footer";
import styles from "./landing.module.css"

export default class LandingPage extends React.Component{
    render(){
        return(
            <section className={styles.container}>
                <div className = {styles.background}>
                    <img 
                    id={styles.dogIMG}
                    alt="mainDog"
                    src={require("../../imgs/dog.jpg").default}
                    width="400"
                    />
                    
                </div>
                <div 
                className={styles.title}>Hi! Welcome to this FULL STACK DOG APPLICATION. </div>

                <div className={styles.text}>
                Learn more about your best friend! 
                </div>

                
                <div id={styles.start}>
                    <Link to={"/home"} >            
                        <img 
                        id={styles.fingerprint}
                        src={require("../../imgs/fingerprint.png").default}
                        alt="fingerprint-icon"
                        width={"150"}
                        />
                    </Link>
                </div>
                <div id={styles.footer}>
                    <Footer />
                </div>
            </section>
        )
    }
}