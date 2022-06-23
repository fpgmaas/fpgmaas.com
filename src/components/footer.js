import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as styles from "./footer.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLinkedin,
  faGithub,
  faStackOverflow,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        <div className={styles.footerLeft}>
          <p className={styles.text}>
            Created by {data.site.siteMetadata.author}, © 2022.
          </p>
        </div>
        <div className={styles.footerRight}>
          <div className={styles.iconsContainer}>
            <a href="https://www.linkedin.com/in/florianmaas/" target="blank">
              <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
            </a>
            <div className={styles.iconDivider}></div>
            <a href="https://github.com/fpgmaas" target="blank">
              <FontAwesomeIcon icon={faGithub} className={styles.icon} />
            </a>
            <div className={styles.iconDivider}></div>
            <a
              href="https://stackoverflow.com/users/8037249/florian"
              target="blank"
            >
              <FontAwesomeIcon icon={faStackOverflow} className={styles.icon} />
            </a>
            <div className={styles.iconDivider}></div>
            <a href="https://twitter.com/fpgmaas" target="blank">
              <FontAwesomeIcon icon={faTwitter} className={styles.icon} />
            </a>
            <div className={styles.iconDivider}></div>
            <a href="mailto:fpgmaas@gmail.com" target="blank">
              <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
