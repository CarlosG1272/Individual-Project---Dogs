import React from "react";
import styles from "./message.module.css"

export default class Message extends React.Component {
    render(){
        return (<section id={styles.container} style={{backgroundColor: this.props.color}}>
            <p>{this.props.message}</p>
        </section>)
    }
}
