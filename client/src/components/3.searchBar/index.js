import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { getDogs, getFavorites }  from "../../actions/index"
import Dog from "../Dog";
import styles from "./search.module.css"


// Select list
import SelectList from "../selectList/SelectList";
import selectTemperament from "../selectList/selectFunction";

// Importo funcion de ordenamiento de perros
import orderedDog from "./OrderFunctions";
import Filters from "./filter/filters";
import LoadingComponent from "./Loader/Loading";

export default function SearchBar(){
    const [input, setInput] = useState("");
    const [temperament, setTemperament] = useState("");

    // Filtrado por nombre
    const [weight, setWeight] = useState({actived: false, min: false});
    const [height, setHeight] = useState({actived: false, min: false});
    const [descendent, setDescendent] = useState(false); 

    // Me hago un estado para manejar el filtro de temperamentos, porque cuando solo trabajo con el local me filtra pero no me rerenderiza
    const [arrayT, setArrayT] = useState([])
    let dispatch = useDispatch();
    

    useEffect(()=> {
        dispatch(getDogs(input))
        dispatch(getFavorites())
    }, [input, dispatch])


    // FILTRADO POR TEMPERAMENTO
    const temperamentChange = (e)=> {
        let valor = e.target.value; 
        setTemperament(valor)
    }


    // PAGINACION
    const [current, setCurrent] = useState(0);
    let dogs = useSelector(state=> state.dogs)
    // [, , temperaments: [{}]]


    // ===============

   
    const handleChange = (e)=>{
        let value = e.target.value
        setInput(value)
        // A medida que se cambie mi setInput, también filtrare mi arreglo
        // Ademas debo dejar mi paginación en 0 nuevamente
        setCurrent(0)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(getDogs(input))
    }

    /*====================================================== */
    


    let filteredDogs = ()=> {
        if(dogs.api) {
            let prueba = [...dogs.api, ...dogs.db]


        let workDog = prueba.sort(function SortArray(x, y){
            if (x.name < y.name) {return -1;}
            if (x.name > y.name) {return 1;}
            return 0;
        })
        // =======================================

        let perros = orderedDog(workDog, descendent, height, weight)

// =================================================================================
        if(arrayT && arrayT.length !== 0) {
                // arrayT = [alegre, smart]
                perros = perros.filter(el=> el && selectTemperament(el, arrayT))   
        }
        
// =================================================================================

        if(input.length !== 0) {
            const filtered = perros.filter(el=> el.name.toLowerCase().includes(input.toLowerCase()));
            
            return filtered.slice(current, current + 8)
        } 
        else if (temperament.length !==0) {
            let filtro = perros
            // No todos tienen ! 
            filtro = filtro.filter(el=> el.temperaments && 
                el.temperaments.join(" ").toLowerCase().includes(temperament.toLowerCase()) ) 
                // Aqui como ahora estoy trabajando como un array, pues lo uno antes de filtrar
             return filtro.slice(current, current + 8)
        }    
    return perros && perros.slice(current, current + 8);
        }
    }

// =================================== PAGINADO ===========================================

    let nextPage = (e) => {
            e.preventDefault()
            setCurrent(current+8)   
    }

    let prevPage = (e)=>{
        e.preventDefault()
        if(current > 0)
            setCurrent(current-8)
        
    }
    /*====================================================== */

    return(<section>
        <section className={styles.containerForms}>
        <div className={styles.forms}>
            <form id={styles.dogSearch} onSubmit={handleSubmit}>
                <input 
                className={styles.input}
                type={"text"}
                value={input}
                onChange={handleChange}
                placeholder={"Please insert a breed dog..."}
                ></input>
                <input className={styles.submit} type={"submit"} value={"Search"}></input>
            </form>

            <form id={styles.dinamicFilter}>
                <input
                className={styles.input}
                type={"text"}
                name={"temperament"}
                placeholder="Temperament filter..."
                value={temperament}
                onChange={temperamentChange}
                >
                </input>          
            </form>

            <div id={styles.selectTemperament}>
                <SelectList 
                input={temperament} 
                setStateprop={setTemperament} 
                setArrayT={setArrayT}
                setCurrent={setCurrent}
                color={"fuchsia"}
                /> 
            </div>

          

            <section className={styles.buttonsContainer}>
                <div id={styles.navigationButtonContainer}>
                    <button onClick={prevPage} className={styles.buttonNav}>
                        <img
                        className={styles.navigationButton}
                        id={styles.inverseButton}
                        src={require("../../imgs/navigate.png").default}
                        alt={"icono"}
                        width={"25"}
                        height={"25"}
                        ></img>
                    </button>
                    <button onClick={nextPage} className={styles.buttonNav}>
                        <img    
                        className={styles.navigationButton}
                        src={require("../../imgs/navigate.png").default}
                        alt={"icono"}
                        width={"25"}
                        height={"25"}
                        ></img>
                    </button>
                </div>
                <div>
                    <Filters 
                    setHeight={setHeight} 
                    setWeight={setWeight} 
                    descendent={descendent}
                    setDescendent={setDescendent}
                    setTemperament={setTemperament}
                    setCurrent={setCurrent}
                    />
                </div>
            </section>

        </div>
        </section>
        {Object.keys(dogs).length === 0 && <div id={styles.loader}><LoadingComponent /></div>}
        <section className={styles.container2}>
            {filteredDogs() && filteredDogs().length === 0 && "No matches found"}
            {filteredDogs() && filteredDogs().map( d=> 
                <Dog 
                // La key va aquí
                key={d.id}
                id={d.id} 
                name={d.name}
                temperaments={d.temperaments}
                img_Url={d.img_Url}
                height_min={d.height_min}
                height_max={d.height_max}
                weight_min={d.weight_min}
                weight_max={d.weight_max}
                />)}
        </section>
    </section>)
}