import React, { useState } from "react";

import { Link } from "react-router-dom";

// Para agregar temperamentos con seleccion multiple loko XD
import SelectList from "../searchBar/SelectList";
//
import styles from "./form.module.css";
import validate from "./functions";
import { PostDog } from "./functions";

export default function CreateDog() {
  const [input, setInput] = useState({
    name: "",
    height_min: 0,
    height_max: 0,
    weight_min: 0,
    weight_max: 0,
    min_life: 0,
    max_life: 0,
    temperaments: [],
  });

  const [errors, setError] = useState({});

  const [newTemperament, setNewtemperament] = useState(""); 
 
  const handleChangeTemperament = (e)=>{
    setNewtemperament(e.target.value)
  }

  const addTemperament = (e)=> {
    e.preventDefault()
    setInput((prev) => ({ ...prev, temperaments: [...prev.temperaments, newTemperament]}))
    setNewtemperament("")
  }

  const deleteTemperament = (event, name)=> {
    event.preventDefault()
    setInput((prev) => ({ ...prev, temperaments: prev.temperaments.filter(el=> el !== name)}))
  }

// ============================================
  const handleInputChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    let errores = validate({ ...input, [e.target.name]: e.target.value });
    setError(errores);
  };

  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      errors.name ||
      errors.height_min ||
      errors.height_max ||
      errors.weight_min ||
      errors.weight_max ||
      errors.min_life ||
      errors.max_life
    ) {
      alert("Faltan campos por llenar");
    } else {
      PostDog(input);
      alert("Dog created! ");
    }
    setInput({
      name: "",
      height_min: 0,
      height_max: 0,
      weight_min: 0,
      weight_max: 0,
      min_life: 0,
      max_life: 0,
      temperaments: [],
    });
    
  };

  return (
    
    <section className={styles.body}>
      <Link to={"/home"}><button>Home</button></Link>
      <form className={styles.container}>
        <div className={styles.label}>
          <label>Name:</label>
          <input
            className={styles.large}
            name="name"
            type="text"
            placeholder="Firulais..."
            value={input.name}
            onChange={handleInputChange}
          ></input>
        </div>

        <div className={styles.label} id={styles.height}>
          <label>Height_min:</label>
          <input
            type="number"
            name="height_min"
            placeholder=""
            value={input.height_min}
            onChange={handleInputChange}
          ></input>

          <label>Height_max:</label>
          <input
            type="number"
            name="height_max"
            value={input.height_max}
            onChange={handleInputChange}
            placeholder=""
          ></input>
        </div>

        <div className={styles.label} id={styles.weight}>
          <label>Weight_min:</label>
          <input
            type="number"
            name="weight_min"
            value={input.weight_min}
            onChange={handleInputChange}
          ></input>

          <label>Weight_max:</label>
          <input
            type="number"
            name="weight_max"
            value={input.weight_max}
            onChange={handleInputChange}
          ></input>
        </div>

        <div className={styles.label} id={styles.life}>
          <label>Min-life:</label>
          <input
            type="number"
            name="min_life"
            value={input.min_life}
            onChange={handleInputChange}
            placeholder=""
          ></input>

          <label>Max-life:</label>
          <input
            type="number"
            name="max_life"
            value={input.max_life}
            onChange={handleInputChange}
            placeholder=""
          ></input>
        </div>

        <div className={styles.label}>
          <label>New temperament:</label>
          <input
            className={styles.large}
            value={newTemperament}
            type="text"
            name="temperaments"
            onChange={handleChangeTemperament}
            placeholder="Intelligent, friendly, ..."
          ></input>
          <button onClick={addTemperament}>Add Temperament</button>
      
           <SelectList 
           input={newTemperament} 

           CreateDog={input.temperaments}
           setArrayT={setInput}
           /> 
          {/* <CheckboxList temperament={input.temperaments} setTemperament={handleSelectChange}/> */}
        </div>
      {/* Aqui necesito un componente que me muestre los temperamentos que tengo seleccionados y además la posibilidad de poder eliminarlos */}
      {input.temperaments.length== 0 ? "Add temperaments":<div>
      
          <ul>
          {input.temperaments.map(tem=> (<li>
            {tem} <button onClick={(e)=>deleteTemperament(e, tem)}>X</button>
            </li>))}
          </ul>
        </div>}

        <button id={styles.submit} onClick={handleSubmit} type="submit" value="Create Dog">Create Dog</button>
      </form>
    </section>
  );
}

