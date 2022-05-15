import React, { useState, useEffect } from "react";
import styles from "./dog.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addFavorite, removeFavorite, deleteMydogs } from "../../actions";

export default function Dog({
  id,
  name,
  temperaments,
  img_Url,
  weight_min,
  weight_max,
  deleteDog,
}) {

    // cuando tengo un esta local, este se reinicia cada rato XD
  const [favorite, setFavorite] = useState(false);

  let dispatch = useDispatch();
  const handleClick = (e) => {
    e.preventDefault();
    if (!favorite) {
      dispatch(addFavorite({ id, name, img_Url, temperaments }));
    } else {
      dispatch(removeFavorite(id));
    }
    setFavorite(!favorite);
  };

  // PARA MANTENER EL FAVORITO SIEMPRE, ya que cuando vuelvo sino mi estado se reinicia XD
  let favorites = useSelector(state=> state.favorites) 
  let boolean = favorites.find(el=> el.id === id)
  useEffect(() => {
    setFavorite(boolean? true:false)
  }, []);


  // YA funka loko
  const deleteButton = (e) => {
    e.preventDefault();
    deleteDog(id);
    dispatch(deleteMydogs(id));
  };

// Por si me llega la información como un arreglo 
  
  return (
    <section className={styles.container} key={id}>
      <section className={styles.img}>
        {/* Para que solo aparezca en mis perros creados */}

        {deleteDog && <button onClick={deleteButton}>Delete</button>}
        <button
          id={favorite ? styles.isFavorite : styles.notFavorite}
          onClick={handleClick}
        >
          <img
            src={require("../../imgs/favorite.png").default}
            alt={"icono"}
            width={"15"}
            height={"15"}
          ></img>
        </button>
        <img
          id={styles.img}
          src={img_Url}
          alt={"perro-image"}
          height="135"
          width="250"
        ></img>
      </section>

      <section className={styles.description}>
        <div id={styles.name}>{name}</div>
        <div className={styles.rest}>Temperament: {temperaments && temperaments.join(", ")}</div>
        <div className={styles.rest}>
          Weight: {weight_min} - {weight_max}
        </div>

        <Link to={`/dog/${id}`}>
          <button id={styles.more}>More information</button>
        </Link>
      </section>
    </section>
  );
}
