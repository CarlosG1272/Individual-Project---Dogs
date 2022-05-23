import React from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css"

export default function NavBar(){
    return (<section className={styles.container}>
    <Link to={"/"}><div className={styles.category}>LandingPage</div></Link> 
    <Link to={"/home"}><div className={styles.category}>Home</div></Link> 
    <Link to={"/dogs/mydogs"}><div className={styles.category}>My dogs</div></Link>
    <Link to={"/dogs/create"}><div className={styles.category}>Create Dog</div></Link>
    <Link to={"/dogs/favorites"}><div className={styles.category}>Favorites</div></Link>
    <div className={styles.category2}>About</div>
    <div className={styles.logos}>
        <div  className={styles.contact} >
            <a href="https://github.com/CarlosG1272" target="_blank" rel="noreferrer">
            <img className={styles.logo} src={require("../../imgs/github.png").default} 
            width="40"
            height="40"
            alt="Git-Hub"
            />
            </a>
        </div>
        <div className={styles.contact}>
                 <a href="https://github.com/CarlosG1272" target="_blank"  className={styles.contact} rel="noreferrer">
                        <img className={styles.logo} src= {require("../../imgs/facebook.png").default} 
                        width="40" 
                        alt="Facebook"/>
                </a>
        </div >

        <div className={styles.contact}>
                <a href="https://github.com/CarlosG1272" target="_blank"  className={styles.contact} rel="noreferrer">
                    <img className={styles.logo2} src= {require("../../imgs/LinkedIn.png").default} 
                    width="40" 
                    alt="LinkedIn"
                    />
                </a>
        </div>        
    </div>
    </section>)
}