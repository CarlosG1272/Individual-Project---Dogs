import React, { useState, useEffect } from "react";
import { addFavorite, removeFavorite } from "../../actions/index";
import { deleteFavorite, postFavorite } from "./postFavorite";
import { useDispatch, useSelector } from "react-redux";
import styles from "./favorite.module.css"

export default function AddFavorite({id, width, height}){

    const [favorite, setFavorite] = useState(false);

    let dispatch = useDispatch();
    const handleClick = (e) => {
        e.preventDefault();
        if (!favorite) {
        dispatch(addFavorite({DogId: id}));
        postFavorite(id)
        } else {
        dispatch(removeFavorite(id));
        deleteFavorite(id)
        }
        setFavorite(!favorite);
  };
    let favorites = useSelector(state=> state.favorites) 
  let findDog = favorites.find(el=> el.DogId.toString() === id.toString())
  useEffect(() => {
    setFavorite(findDog ? true:false)
  }, [findDog]);

    return(<div className={styles.container}>
         <button
            id={styles.favoriteIcon}
          onClick={handleClick}
        >
          <img
            id={favorite ? styles.isFavorite : styles.notFavorite}
            src={require("../../imgs/favorite.png").default}
            alt={"icono"}
            width={width}
            height={height}
          ></img>
      </button>
    </div>)
}