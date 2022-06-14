import React from "react"
import * as projectStyles from './project.module.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faUpRightFromSquare
  } from '@fortawesome/free-solid-svg-icons'
  import {
    faStar  
  } from '@fortawesome/free-regular-svg-icons'

const Project = ({title, url, image, description, stars}) => {
    return (
        <a href = {url} target = "_blank" className = {projectStyles.link}>
            <div className={projectStyles.projectContainer}>
            <img src={image} alt={title} className={projectStyles.image} />
            <div className={projectStyles.textContainer}>
            <h2 className={projectStyles.title}>{title}</h2>
            <div className={projectStyles.iconsContainer}>
                <a href={url} target='blank'>
                <FontAwesomeIcon icon={faUpRightFromSquare} className={projectStyles.icon} />
                </a>
                <FontAwesomeIcon icon={faStar} className={projectStyles.starIcon} />
                <p className={projectStyles.starText}>{stars}</p>
            </div>
            <p className={projectStyles.description}>{description}</p>
            </div>
        </div>
      </a>
    )
}

export default Project