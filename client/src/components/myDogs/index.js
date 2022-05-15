import React from "react"; 
import {  useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import Dog from "../Dog";
import { deleteDog } from "./deleteFunction";

import styles from "./mydogs.module.css"


export default function MyDogs () {
    
    const createdDogs = useSelector(state => state.dogs.db)
    
    return (<section className={styles.container}>
        <Link to={"/home"}><button>Home</button></Link>
        <div>PERRITOS CREADOS xdxd</div>
        {createdDogs && createdDogs.map(d=> {
            // Yo nombre a mi temperamento, Temperaments
            
            return (<Dog 
            // La key va aquí
            key={d.id}
            id={d.id} 
            name={d.name}
            temperaments={d.temperaments}
            img_Url={d.img_Url}
            weight_min={d.weight_min}
            weight_max={d.weight_max}
            deleteDog={deleteDog}
            />)
        }
           )
}
    </section>)
}