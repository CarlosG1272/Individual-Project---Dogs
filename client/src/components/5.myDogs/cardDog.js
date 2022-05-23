import React from "react";
import AddFavorite from "../addFavorite/addFavorite";
import styles from "./cardDog.module.css"
import { useDispatch } from "react-redux";
import { deleteMydogs } from "../../actions";
import { deleteDog } from "./deleteFunction";
import { Link } from "react-router-dom";

export default function CardDog({
    id,
    name,
    temperaments,
    img_Url,
    height_min,
    height_max,
    weight_min,
    weight_max}){
    let dispatch = useDispatch()
  // YA funka loko
  const deleteButton = (e) => {
    e.preventDefault();
    deleteDog(id);
    dispatch(deleteMydogs(id));
  };
    return(<section className={styles.container} data-testid="container">
        <div id={styles.box1}>
            <div>
                <AddFavorite id={id} width={"50"} height={"50"}/>
            </div>
            <button onClick={deleteButton} id={styles.deleteButton}>
                <img
                id={styles.buttonImg}
                src={require("../../imgs/delete.png").default}
                alt={"moreInformation"}
                height={"50"}
                width={"50"}
                ></img>
            </button>
        </div>
        <div id={styles.box2}>
            <div>
                <img src={require("../../imgs/defaultDog.png").default}  
                width="250" height="250" alt="defaultCuteDog"/>
            </div>
        </div>
        <div id={styles.box3}>
        <div className={styles.description} data-testid="description"> 
          <div id={styles.name} data-testid="name">{name}</div>
          <div className={styles.rest} data-testid="temperament"><strong>Temperament: </strong> {temperaments && temperaments.join(", ")}</div>
          <div className={styles.rest} data-testid="weight">
            <strong>Weight: </strong>{weight_min} - {weight_max} lb
          </div>
          <div className={styles.rest} data-testid="height">
            <strong>Height: </strong>{height_min} - {height_max} inches
            <Link to={`/dog/${id}`}>
                <img
                id={styles.img}
                src={require("../../imgs/moreBlack.png").default}
                alt={"moreInformation"}
                height={"50"}
                width={"50"}
                ></img>
            </Link>
          </div>
        </div>
        <div>
          
        </div>
        </div>
    </section>)
}