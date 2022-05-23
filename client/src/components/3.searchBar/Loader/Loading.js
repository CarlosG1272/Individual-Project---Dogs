import React from "react";
import styles from "./icon.module.css"
export default class LoadingComponent extends React.Component{
    render(){
        return(<section id={styles.loader}>
            <div className={styles.dual_ring}></div>
        </section>)
    }
}