import React from "react"
import * as styles from "./project.module.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons"
import { faStar } from "@fortawesome/free-regular-svg-icons"

const Project = ({ title, url, image, description, stars }) => {
  return (
    <a href={url} target="_blank" className={styles.link}>
      <div className={styles.projectContainer}>
        <img src={image} alt={title} className={styles.image} />
        <div className={styles.textContainer}>
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.iconsContainer}>
            <a href={url} target="blank">
              <FontAwesomeIcon
                icon={faUpRightFromSquare}
                className={styles.icon}
              />
            </a>
            <FontAwesomeIcon icon={faStar} className={styles.starIcon} />
            <p className={styles.starText}>{stars}</p>
          </div>
          <p className={styles.description}>{description}</p>
        </div>
      </div>
    </a>
  )
}

export default Project
