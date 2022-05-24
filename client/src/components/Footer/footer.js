import React from "react"
import styles from "./footer.module.css"

export default function Footer(){
    return(<section>
        <footer id={styles.footer}>
                    <div>
                        <a href="https://github.com/CarlosG1272" target="_blank"  
                        className={styles.contact} rel="noreferrer" >
                        <img className={styles.logo} src={require("../../imgs/github.png").default} 
                        width="40"
                        alt="Git-Hub"
                        />
                        Github
                        </a>
                    </div>
                    <div className={styles.contact}>
                    <a href="https://www.facebook.com/profile.php?id=100081600548515" target="_blank"  
                    className={styles.contact} rel="noreferrer">
                        <img className={styles.logo} src= {require("../../imgs/facebook.png").default} 
                        width="40"
                        alt="Facebook"
                        />
                        Facebook
                        </a>
                    </div >

                    <div className={styles.contact}>
                    <a href="https://github.com/CarlosG1272" target="_blank"  
                    className={styles.contact} rel="noreferrer">
                        <img className={styles.logo2} src= {require("../../imgs/LinkedIn.png").default} 
                        width="40" 
                        alt="LinkedIn"
                        />
                        LinkedIn
                        </a>
                    </div>
                    
                </footer>
    </section>)
}
