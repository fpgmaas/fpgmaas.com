import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import * as footerStyles from "./footer.module.scss"

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
    <footer className={footerStyles.footer}>
      <div className={footerStyles.footerContainer}>
        <div className={footerStyles.footerLeft}>
          <p className={footerStyles.text}>
            Created by {data.site.siteMetadata.author}, © 2022.
          </p>
        </div>
        <div className={footerStyles.footerRight}>
          <div className={footerStyles.iconsContainer}>
            <a href="https://www.linkedin.com/in/florianmaas/" target="blank">
              <FontAwesomeIcon
                icon={faLinkedin}
                className={footerStyles.icon}
              />
            </a>
            <div className={footerStyles.iconDivider}></div>
            <a href="https://github.com/fpgmaas" target="blank">
              <FontAwesomeIcon icon={faGithub} className={footerStyles.icon} />
            </a>
            <div className={footerStyles.iconDivider}></div>
            <a
              href="https://stackoverflow.com/users/8037249/florian"
              target="blank"
            >
              <FontAwesomeIcon
                icon={faStackOverflow}
                className={footerStyles.icon}
              />
            </a>
            <div className={footerStyles.iconDivider}></div>
            <a href="https://twitter.com/fpgmaas" target="blank">
              <FontAwesomeIcon icon={faTwitter} className={footerStyles.icon} />
            </a>
            <div className={footerStyles.iconDivider}></div>
            <a href="mailto:fpgmaas@gmail.com" target="blank">
              <FontAwesomeIcon
                icon={faEnvelope}
                className={footerStyles.icon}
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
