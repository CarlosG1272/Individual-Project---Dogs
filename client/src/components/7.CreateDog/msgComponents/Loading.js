import React from "react";
import styles from "./icon.module.css"
export default class LoadingComponent extends React.Component{
    render(){
        return(<section>
            <div class={styles.dual_ring}></div>
        </section>)
    }
}