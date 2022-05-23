import React from "react";
import { connect } from "react-redux";
import { getTemperaments } from "../../actions";
import styles from "./selectList.module.css"


export class SelectList extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            options: []
        }
        this.handleChange = this.handleChange.bind(this);
    }


    componentDidMount(){
        this.props.getTemperaments()
    }

    handleChange = (e)=> {
        // Le pongo setStateprop, porque dependiendo de donde lo este usando este recibira distintos tipos de funciones, igual el que me llega por props heredado es el compare
        let value = e.target.value
        if(value !== "") { // esta validacion para que no me agregue valores vacios
            let coincidence = this.state.options.find(el=> el===value)

            if(coincidence) {
                this.setState({options: this.state.options.filter(el=> el!== value)})
            } else {
                this.setState({options: [...this.state.options, value]})
            }
            // Si la funcion viene de create dog entra aca
            if(this.props.CreateDog) {
            // Debido al delay le paso el valor de esta forma
            this.props.setArrayT(prev=> ({...prev, temperaments: [...this.state.options, value]}))
        }
        }
    }

    cleanFilters = (e)=> {
        e.preventDefault()
        // Si me viene del componente de filtro entra aca
        if(!this.props.CreateDog) {
            this.setState({options: []})
            this.props.setArrayT([])
        } else {
            // De lo contrario me limpita todo mi estado
            this.props.setArrayT(prev=> ({...prev, temperaments: []}))
            this.setState({options: []})
        }

    }

    // Si me viene el CreateDog significa que estoy en el componente de create dog y no necesito esta funcion, de igual forma desactivo este boton
    filterTemperaments = (e)=> {
        e.preventDefault()
        this.props.setArrayT(this.state.options)
        // Ademas limpio el paginado para evitar que se pierdan datos
        this.props.setCurrent(0)
    }
    // eslint-disable-next-line
    render(){
        return(<div className={styles.container}>
            <section>
                <label>
                    {/* esto lo hago para que pueda ver cuales llevo seleccionado */}
                    <input  mbsc-input={"true"} id={styles.my_input} data-dropdown="true"
                    data-tags="true" readOnly value={this.state.options}
                    />
                </label>
            </section>
            {/* Me marcaba warning porque en react se pasa el selectMultiple con minuscula, y los booleanos como string "true" y no true */}
        <section>
             <select onChange={this.handleChange} selectmultiple={"true"}
             id={styles.select}
             style={{backgroundColor: this.props.color}}
             value={this.state.options}>
                {/* Default */ }
             { this.props.input === "" && <option  value={""}  >
             {/* selected="selected" no es necesario XD */}
             -- Select temperament --
             </option> }

                 {this.props.temperaments && this.props.temperaments
                .filter(el=> el && el.name && el.name.toLowerCase().includes(this.props.input))
                .map(el=> el && (<option key={el.id} value={el.name}>
                         {el.name}
                     </option>))
                 }
            </select>
            <div id={styles.filterButtons}>
                {/* {si es de createDog no necesito el boton} */}
                {!this.props.CreateDog
                && <button onClick={this.filterTemperaments}
                className={styles.filterButtons}>Filtered</button> }

                <button onClick={this.cleanFilters}
                className={styles.filterButtons}>Clean</button>

            </div>
        </section>
        </div>)
    }
}


function mapStatetoProps(state){
    return{
        temperaments: state.temperaments
    }
}

function mapDispatchToProps(dispatch){
    return {
        getTemperaments: ()=>dispatch(getTemperaments())
    }
}

export default connect (mapStatetoProps, mapDispatchToProps)(SelectList)



