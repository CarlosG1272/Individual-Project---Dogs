import React from "react"
import { removeFavorite } from "../../actions"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import styles from "./favorites.module.css"

export class Favorites extends React.Component{

    remover = (index)=> {
        this.props.removeFavorite(index)
    }

    render(){
        let favorite = this.props.favorites
        return(<section className={styles.container}>
            <Link to={"/home"}><button>Home</button></Link>
            {favorite && favorite.map(el=>{
                return (<section key={el.id} className={styles.favoriteDog}>
                    <div>{el.id}</div>
                    <div>{el.name}</div>
                    <div>{el.temperament}</div>
                    <button onClick={()=>this.remover(el.id)}>Remove</button>
                </section>)
            })}
        </section>)
    }
}



function mapStateToProps(state) {
    return {
        favorites: state.favorites
    }
}

function mapDispatchToprops(dispatch){
    return {
        removeFavorite: (id)=>dispatch(removeFavorite(id))
    }
}

export default connect(mapStateToProps, mapDispatchToprops)(Favorites)