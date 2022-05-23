import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getDetail } from "../../actions";
import styles from "./detail.module.css";
import Temperament from "./temperament";

import Footer from "../Footer/footer";
import AddFavorite from "../addFavorite/addFavorite";
import Arrow from "./Arrow/arrow";

export default function Detail() {
  let { id } = useParams();
  let dispatch = useDispatch();
  let details = useSelector((state) => state.detail);

  const [slide, setSlide] = useState(false)
  const activeSlide = ()=> {
    setSlide(true)
    setTimeout(() => {
      setSlide(false)
  }, 6000);
  }
  useEffect(() => {
    dispatch(getDetail(id));
    activeSlide()
  }, [dispatch, id]);

  
  if(details.temperaments && details.temperaments[0].name) {
    details.temperaments = details.temperaments.map(el=> el.name)
  }

  return (
    <section className={styles.body} data-testid="container">
      <div id={styles.backHome} data-testid="back">
        <Link to={"/home"}><img
            id={styles.back}
            src={require("../../imgs/back.png").default}
            alt={"back"}
            width={"70"}
            height={"70"}
          ></img></Link>
      </div>

      <section className={styles.sqrt} data-testid="description">
        {!details ? (
          "Loading"
        ) : (
          <div className={styles.container}>

          <section id={styles.firstSection}>
            <div id={styles.headerName}>
              <h1 id={styles.name}>{details.name}</h1>
              <a id={styles.more} href={`https://es.wikipedia.org/wiki/${details.name}`} 
              target={"_blank"} rel="noreferrer">
              More information</a>
            </div>
              <img
                id={styles.mainDogImg}
                src={details.img_Url ? details.img_Url:require("../../imgs/defaultDog.png").default} 
                width={!details.img_Url && "400"}
                height={!details.img_Url && "400"}
                alt={"cuteDog"}
              />
              
              <div id={styles.AddFavorite}>
              {details.id && <AddFavorite id={details.id} width={"100"} height={"100"}/>}
                
              </div>
            {slide && <div id={styles.hover}><Arrow /></div>}
          </section>
          <section id={styles.secondSection}>
            
            <div id={styles.box1}>
                <h2 data-testid="Physical">Physical characteristics</h2>
                <div>
                  <div className={styles.textArea}>
                    <span className={styles.label} data-testid="Height">Height:</span> 
                    <span className={styles.content}>Its height varies between <strong>{details.height_min} in </strong> minimum and <strong>{details.height_max} in</strong> maximum</span>
                  </div>
                  <div className={styles.textArea}>
                    <span className={styles.label} data-testid="Weight">Weight:</span> 
                    <span className={styles.content}>Akita can reach a minimum weight of <strong>{details.weight_min} lb</strong> and a maximum weight of <strong>{details.weight_max} lb</strong>.</span>
                  </div>
                  <div className={styles.textArea}>
                    <span className={styles.label} data-testid="Life">Life span:</span> 
                    <span className={styles.content}>On the other hand, the average life span can range from <strong>{details.height_min}</strong> to <strong>{details.height_max} years</strong>.</span>
                  </div>      
                </div>
            </div>
            <div id={styles.box2}>
                <h2 data-testid="Breed">Breed characteristics</h2>
                <div id={styles.textArea2}>
                  {details.origin && 
                  <div>
                    <span>{details.name} comes from <strong>{details.origin}</strong></span>
                  </div>}
                  
                  {details.bred_for && 
                  <div>
                    <span >This breed is characterized by being <strong>{details.bred_for}</strong></span>
                  </div> }
                  
                  {details.breed_group && 
                  <div>
                    <span >The group to which it belongs is considered <strong>{details.breed_group}</strong></span>
                  </div>}
                  
                </div>
            </div>
          </section>

          <section id={styles.thirdSection}>
            <h2 data-testid="temperaments">TEMPERAMENTS</h2>
            <div id={styles.circleWrap}>
              {console.log(details.temperaments)}
              {details.temperaments && details.temperaments.map(el=>
                <Temperament temperament={el}/>
              )}
               
            </div>
            
          </section>
        </div>)}
      </section>
                <Footer />
      </section>
  )}
  

