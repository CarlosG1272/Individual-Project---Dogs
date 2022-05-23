import React from "react"
import { removeFavorite } from "../../actions"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import styles from "./favorites.module.css"
import { deleteFavorite } from "../addFavorite/postFavorite"

export class Favorites extends React.Component{

    remover = (index)=> {
        this.props.removeFavorite(index)
        deleteFavorite(index)
    }

    componentDidMount(){
        this.getFavoriteDogs()
    }
   
    getFavoriteDogs = ()=> {
        let favorite = this.props.favorites
        let finalDogs = this.props.dogs.api && this.props.dogs.api.concat(this.props.dogs.db)
        // eslint-disable-next-line
        let favoriteDogs = finalDogs && finalDogs.filter(el=> {
        if(el.id) {
            for(let i = 0; i < favorite.length; i ++){
                if(el.id.toString() === favorite[i].DogId.toString()){
                    return el
                }
            }}
        }   ) 

    return favoriteDogs
    }

    render(){
        return(<section className={styles.container}>
            <Link to={"/home"}><img
                id={styles.backImage}
                src={require("../../imgs/backBlack.png").default}
                alt={"Back"}
                width={"80"}
                height={"80"}
                 />
            </Link>
            <section id={styles.wrapFavorite}>
            {this.getFavoriteDogs() && this.getFavoriteDogs().map(el=>{
                return (<section key={el.id} className={styles.favoriteDog}>
                    <Link  to={`/dog/${el.id}`}>
                    <img
                    id={styles.img}
                    src={el.img_Url ? el.img_Url:require("../../imgs/defaultDog.png").default}
                    alt={"defaultCuteDog"}
                    height="150"
                    width="150"
                    ></img>
                    </Link>
                    <div id={styles.name}>{el.name}</div>
                    <button id={styles.button}onClick={()=>this.remover(el.id)}>X</button> 
                </section>)
            })} 
            </section>
        </section>)
    }
}



function mapStateToProps(state) {
    return {
        favorites: state.favorites,
        dogs: state.dogs
    }
}

function mapDispatchToprops(dispatch){
    return {
        removeFavorite: (id)=>dispatch(removeFavorite(id))
    }
}

export default connect(mapStateToProps, mapDispatchToprops)(Favorites)