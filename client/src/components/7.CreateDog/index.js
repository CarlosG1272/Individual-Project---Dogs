import React, { useState } from "react";

import { Link } from "react-router-dom";

// Para agregar temperamentos con seleccion multiple loko XD
import SelectList from "../selectList/SelectList"
//
import styles from "./form.module.css";

import { validationsForm } from "./validationFunction"

// ================================
  import { useForm } from "./useForm";
import Message from "./msgComponents/correctSend";
import BoxTemperament from "./box-temperament"

  // Este valor se va a mi hook personalizado, y su estado toma esos valores
  const initialForm = {
  name: "",
  height_min: 0,
  height_max: 0,
  weight_min: 0,
  weight_max: 0,
  min_life: 0,
  max_life: 0,
  temperaments: [],};

 
// ================================
export default function CreateDog() {

  // ================================
  const {form, setForm, errors,  response, incomplete, 
    handleChange, handleBlur, handleSubmit, setPrevTemp} = useForm(initialForm, validationsForm)
  // ================================
  const [newTemperament, setNewtemperament] = useState(""); 
 


  const handleChangeTemperament = (e)=>{
    setNewtemperament(e.target.value)
  }

  const addTemperament = (e)=> {
    e.preventDefault()
    setForm((prev) => ({ ...prev, temperaments: [...prev.temperaments, newTemperament]}))
    setNewtemperament("")
  }

  const deleteTemperament = (event, name)=> {
    event.preventDefault()
    setForm((prev) => ({ ...prev, temperaments: prev.temperaments.filter(el=> el !== name)}))
  }


 

  return (
    
    <section className={styles.body}>
      <div id={incomplete || response ? styles.message:styles.noMessage}>
        {incomplete && <Message message= {"The dog cannot be created because there are missing fields to fill in"} color={"red"}/>}
        {response && <Message message= {"Dog Created!"} color={"green"}/>}
      </div>
      <Link to={"/home"}><img
            id={styles.back}
            src={require("../../imgs/back.png").default}
            alt={"icono"}
            width={"70"}
            height={"70"}
          ></img></Link>
      <form className={styles.container}>
        <h1>CREATE DOG</h1>
        <div className={styles.labelName} id={styles.name}>
          <label>Name:</label>
          <input
            className={errors.name ? styles.errorLarge:styles.large}
            name="name"
            type="text"
            placeholder="Firulais..."
            value={form.name}
            onBlur={handleBlur}
            onChange={handleChange}
            required
          ></input>
        </div>
        {errors.name && <p className={styles.errors}>{errors.name}</p>}

        <div className={styles.label} id={styles.height}>
          <div className={styles.individual}>
            <label>Height_min:</label>
            <input
              className={errors.height_min && styles.errorInput}
              type="number"
              name="height_min"
              placeholder=""
              value={form.height_min}
              onBlur={handleBlur}
              onChange={handleChange}
              required
            ></input>
            {errors.height_min && <p className={styles.errors}>{errors.height_min}</p>}
          </div>
          <div className={styles.individual}>
            <label>Height_max:</label>
            <input
              className={errors.height_max && styles.errorInput}
              type="number"
              name="height_max"
              value={form.height_max}
              onBlur={handleBlur}
              onChange={handleChange}
              required
            ></input>
            {errors.height_max && <p className={styles.errors}>{errors.height_max}</p>}
          </div>
        </div>



        <div className={styles.label} id={styles.weight}>
          <div className={styles.individual}>
            <label>Weight_min:</label>
            <input
              className={errors.weight_min && styles.errorInput}
              type="number"
              name="weight_min"
              value={form.weight_min}
              onBlur={handleBlur}
              onChange={handleChange}
              required
            ></input>
             {errors.weight_min && <p className={styles.errors}>{errors.weight_min}</p>}
          </div>
          <div className={styles.individual}>
            <label>Weight_max:</label>
            <input
              className={errors.weight_max && styles.errorInput}
              type="number"
              name="weight_max"
              onBlur={handleBlur}
              value={form.weight_max}
              onChange={handleChange}
              required
            ></input>
          {errors.weight_max && <p className={styles.errors}>{errors.weight_max}</p>}
          </div>
        </div>

        <div className={styles.label} id={styles.life}>
          <div className={styles.individual}> 
            <label>Min-life:</label>
            <input
              className={errors.min_life && styles.errorInput}
              type="number"
              name="min_life"
              onBlur={handleBlur}
              value={form.min_life}
              onChange={handleChange}
              required
            ></input>
            {errors.min_life && <p className={styles.errors}>{errors.min_life}</p>}
          </div>

          <div className={styles.individual}>
            <label>Max-life:</label>
            <input
              className={errors.max_life && styles.errorInput}
              type="number"
              name="max_life"
              value={form.max_life}
              onChange={handleChange}
              required
            ></input>
          
            {errors.max_life && <p className={styles.errors}>{errors.max_life}</p>}
          </div>
        </div>

        <div id={styles.SelectContainer}>
          Temperaments
            <SelectList 
           input={newTemperament} 
           setPrevTemp={setPrevTemp}
           CreateDog={form.temperaments}
           setArrayT={setForm}
           color={"gray"}
           />  
        </div>

        <div className={styles.label}>
          <label>Create a New Temperament:</label>
          <input
            className={styles.large}
            value={newTemperament}
            type="text"
            name="temperaments"
            onChange={handleChangeTemperament}
            placeholder="Intelligent, friendly, ..."
          ></input>
           <button id={styles.addTemperament}onClick={addTemperament}>Add Temperament</button>  
        </div>
      {/* Aqui necesito un componente que me muestre los temperamentos que tengo seleccionados y además la posibilidad de poder eliminarlos */}
       
       <section id={styles.dipTemperaments}>
        {form.temperaments.length=== 0 ? "Add temperaments":<div id={styles.wrapContainer}>    
            {form.temperaments.map(tem=> (
            <BoxTemperament 
            deleteTemperament={deleteTemperament}
            temperament={tem} 
            />))}
   
          </div>} 
      </section>

      {errors.temperaments && <p className={styles.errors}>{errors.temperaments}</p>}

        <button id={styles.submit} onClick={handleSubmit} type="submit" value="Create Dog">
          <strong>Create</strong>
          <img
            src={require("../../imgs/createDog.png").default}
            alt={"faceDog"}
            width={"45"}
            height={"45"}
          ></img>
        </button>
      </form>


    </section>
  );
}

