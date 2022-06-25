import React from "react"
import * as styles from "./skillLogo.module.scss"


const SkillLogo = ({ name, logo }) => {
  return (
    <div className={styles.skillContainer}>
    <div className={styles.logoContainer}>
      <img src={logo} alt={name} className={styles.logo}/>
    </div>
    <p className={styles.text}> {name}</p>
    </div>

  )
}

export default SkillLogo
