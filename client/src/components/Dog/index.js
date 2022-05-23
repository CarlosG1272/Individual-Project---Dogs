import React from "react";
import styles from "./dog.module.css";
import { Link } from "react-router-dom";
import { deleteMydogs } from "../../actions";

import AddFavorite from "../addFavorite/addFavorite";
import { useDispatch } from "react-redux";

export default function Dog({
  id,
  name,
  temperaments,
  img_Url,
  height_min,
  height_max,
  weight_min,
  weight_max,
  deleteDog,
  
}) {

  let dispatch = useDispatch()
  // YA funka loko
  const deleteButton = (e) => {
    e.preventDefault();
    deleteDog(id);
    dispatch(deleteMydogs(id));
  };

// Por si me llega la información como un arreglo 
  
  return (
    <section className={styles.container} key={id} data-testid="container">
    <div className={styles.container2}>
      {/* Componente para favoritos */}
      <AddFavorite id={id} width={"35"} height={"35"}/> 

      <section className={styles.img}>
        {/* Para que solo aparezca en mis perros creados */}

        {deleteDog && <button onClick={deleteButton}>Delete</button>}
        
        <img
          id={styles.img}
          src={img_Url ? img_Url:require("../../imgs/defaultDog.png").default}
          alt={"defaultCuteDog"}
          height={img_Url ? "135":"150"}
          width={img_Url ? "250":"150"}
        ></img>
      </section>

      <section className={styles.containerDescription}>
        <div className={styles.description} data-testid="description"> 
          <div id={styles.name} data-testid="name">{name}</div>
          <div className={styles.rest} data-testid="temperament"><strong>Temperament: </strong> {temperaments && temperaments.join(", ")}</div>
          <div className={styles.rest} data-testid="weight">
            <strong>Weight: </strong>{weight_min} - {weight_max} lb
          </div>
          <div className={styles.rest} data-testid="height">
            <strong>Height: </strong>{height_min} - {height_max} inches
          </div>
        </div>
        <div>
          <Link to={`/dog/${id}`}>
              <img
                id={styles.iconMore}
                src={require("../../imgs/moreIcon.png").default}
                alt={"moreInformation"}
                height={"50"}
                width={"50"}
                ></img>
          </Link>
        </div>
      </section>
      
      
    </div>
    </section>
  );
}
