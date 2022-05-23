import React from "react";
import styles from "./filters.module.css"
export default function Filters({
  setHeight,
  setWeight,
  descendent,
  setDescendent,
  setTemperament,
  setCurrent
}) {
  



  let orderByHeight = (e) => {
    // Por alguna razon el e.target.value es un string XD
    // Sin el return tampoco funka loko XD 
    switch(parseInt(e.target.value)) {
        case 0: 
            return setHeight((prev) => ({ ...prev, actived: false, min: false}))
        case 1:
            return setHeight((prev) => ({ ...prev, actived: true, min: true }))
        case 2:
            return setHeight((prev) => ({ ...prev, actived: true, min: false }))
        default: 
          return setHeight((prev) => ({ ...prev, actived: false, min: false }))
    }      
  };


  let orderByWeight = (e) => {
    switch(parseInt(e.target.value)) {
        case 0: 
            return setWeight((prev) => ({ ...prev, actived: false, min: false}))
        case 1:
            return setWeight((prev) => ({ ...prev, actived: true, min: true }))
        case 2:
            return setWeight((prev) => ({ ...prev, actived: true, min: false }))
        default:
            return setWeight((prev)=>({...prev, actived: false, min:false}))

    }     
  };

  let changeDescendent = (e) => {
    e.preventDefault()
    setDescendent(!descendent);
  };

  let cleanFiltered = (e) => {
    e.preventDefault()
    setHeight({ actived: false, min: false });
    setWeight({ actived: false, min: false });
    setDescendent(false);
    setTemperament("");
    setCurrent(0)
  };
  
  

  return (
    <div className={styles.container}>
      
      <button onClick={changeDescendent} id={styles.AscDescContainer}>
          <img 
          id={styles.AscDesc}
          src={require(`../../../imgs/${descendent ? "Asc":"Desc"}.png`).default}
          alt={"icono"}
          width={"25"}
          ></img>
      </button>

        <select onChange={orderByHeight} className={styles.filterOptions}>
            <option value={"0"} >Height Filter</option>
            <option value={"1"} >Height-min</option>
            <option value={"2"} >Height-max</option>
        </select>

        <select onChange={orderByWeight} className={styles.filterOptions}>
            <option value={"0"}>Weight Filter</option>
            <option value={"1"}>Weight-min</option>
            <option value={"2"}>Weight-max</option>
        </select>

      <button onClick={cleanFiltered} className={styles.cleanFiltered}>Clean Filter</button>
    </div>
  );
}
