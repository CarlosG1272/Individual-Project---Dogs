import React from "react"
import  SearchBar  from "../3.searchBar"
import styles from "./home.module.css"
import NavBar from '../4.nav_bar/index';

export default function Home(){
    return(
    <section className={styles.container}>
         <div id={styles.NavBar}>
            <NavBar />   
        </div>
        <div>
        <SearchBar/>
        </div>
       
    </section>)
}