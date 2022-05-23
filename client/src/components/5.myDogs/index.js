import React from "react"; 
import {  useSelector } from 'react-redux'
import { Link } from "react-router-dom";


import CardDog from "./cardDog";
import styles from "./mydogs.module.css"


export default function MyDogs () {
    
    const createdDogs = useSelector(state => state.dogs.db)
    
    return (<section className={styles.container}>
        <Link to={"/home"}><img
                id={styles.backImage}
                src={require("../../imgs/backBlack.png").default}
                alt={"Back"}
                width={"80"}
                height={"80"}
                 />
        </Link>
        <div id={styles.tittle}>Dogs created</div>
        <section className={styles.wrapContainer}>
        {createdDogs && createdDogs.map(d=> {
            // Yo nombre a mi temperamento, Temperaments
            return(<CardDog 
                 //  La key va aquí
            key={d.id}
            id={d.id} 
            name={d.name}
            temperaments={d.temperaments}
            img_Url={d.img_Url}
            height_min={d.height_min}
            height_max={d.height_max}
            weight_min={d.weight_min}
            weight_max={d.weight_max}
                />)
            })}
</section>
    </section>)
}