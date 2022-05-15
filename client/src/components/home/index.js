import React from "react"
import  SearchBar  from "../searchBar"
import styles from "./home.module.css"

export default function Home(){
    return(<section className={styles.container}>
        <SearchBar/>
    </section>)
}