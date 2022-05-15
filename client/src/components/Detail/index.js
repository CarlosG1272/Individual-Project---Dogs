import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getDetail } from "../../actions";
import styles from "./detail.module.css";

export default function Detail() {
  let { id } = useParams();
  let dispatch = useDispatch();
  let details = useSelector((state) => state.detail);
  useEffect(() => {
    dispatch(getDetail(id));
  }, []);

  const verticalName = details.name && details.name.split("");

  // En caso de que me llegue el detail de mi perro creado en mi database, pues convierto el resultado
  let temperaments = details.temperaments;
  if (details.temperaments && typeof details.temperaments[0] === "object") {
    temperaments = details.temperaments.map((el) => el.name);
  }

  return (
    <section className={styles.body}>
      <div>
        <Link to={"/home"}>
          <button>BACK</button>
        </Link>
      </div>

      <section className={styles.sqrt}>
        {!details ? (
          "Loading"
        ) : (
          <div className={styles.container}>
            <div className={styles.img}>
              <img src={details.img_Url} width="800" height={"400"} />
              <button id={styles.favorite}>
                <img
                  src={require("../../imgs/favorite.png").default}
                  alt={"icono"}
                  width={"50"}
                  height={"50"}
                ></img>
              </button>
            </div>
            <div className={styles.description}>
              <div id={styles.name}>
                {verticalName && verticalName.map((el) => <span>{el}</span>)}
              </div>

              <div id={styles.temperament}>
                Temperament: {temperaments && temperaments.join(", ")}
              </div>
              <div>
                Height-min: {details.height_min} Height-max:{" "}
                {details.height_max}
              </div>
              <div>
                weight-min: {details.weight_min} weight-max:{" "}
                {details.weight_max}
              </div>
              <div>
                Time-life: {details.min_life} - {details.max_life}
              </div>
              <div></div>
            </div>
          </div>
        )}
      </section>
    </section>
  );
}

// export class Detail extends React.Component {

//     componentDidMount(){
//         const id= this.props.match.params.id
//         console.log(this.props)
//     }
//     render(){
//         {this.section}
//         return(<section>
//         <div></div>
//         <div></div>
//     </section>)
//     }

// }

// function mapStateToProps(state){
//     return {
//         details: state.details
//     }
// }

// function mapDispatchToProps(dispatch){
//     return {
//         getDetails: id=> dispatch(getDetail(id))
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Detail)
