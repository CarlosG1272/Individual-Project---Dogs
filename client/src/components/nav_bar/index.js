import React from "react";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css"

export default function NavBar(){
    return (<section className={styles.container}>
    <Link to={"/"}><div className={styles.category}>LandingPage</div></Link> 
    <Link to={"/home"}><div className={styles.category}>Inicio</div></Link> 
    <Link to={"/dogs/mydogs"}><div className={styles.category}>My dogs</div></Link>
    <Link to={"/dogs/create"}><div className={styles.category}>Create Dog</div></Link>
    <Link to={"/dogs/favorites"}><div className={styles.category}>Favorites</div></Link>
    <div className={styles.category}>About</div>
    </section>)
}