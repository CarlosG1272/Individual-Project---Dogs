import React from "react";
import { connect } from "react-redux";
import { getTemperaments } from "../../actions";


export class CheckboxList extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            options: []
        }
        this.handleChange2 = this.handleChange2.bind(this);
    }


    componentDidMount(){

        this.props.getTemperaments()
    }

    handleChange = (e)=> {
        this.props.setTemperament(e.target.value)
    }

    handleChange2(event) {
        let value = event.target.value

        let coincidence = this.state.options.find(el=> el===value)

        if(coincidence) {
            this.setState({options: this.state.options.filter(el=> el!== value)})
        } else {
            this.setState({options: [...this.state.options, value]})
        }
        
      }


    render(){
        return(<div>
            
             <select onChange={this.handleChange2} selectMultiple={true} touchUi={false} id="select" value={this.state.options}>
                {/* Default */}

                 {this.props.temperaments && this.props.temperaments
                 .map(el=> {
                     return(<option type="" key={el.id} value={el.name}>
                         {el.name}
                     </option>)
                 })}   
            </select> 
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

export default connect (mapStatetoProps, mapDispatchToProps)(CheckboxList)

