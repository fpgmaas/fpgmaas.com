import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import * as footerStyles from './footer.module.scss'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Footer = () => {

    const data = useStaticQuery(graphql`query {
        site {
            siteMetadata {
                author
        }
    }
    }
`)

    return (
        <footer>
            <div className={footerStyles.footerContainer}>
                <div className={footerStyles.footerLeft}>
                    <p className={footerStyles.text}>
                        Created by {data.site.siteMetadata.author}, © 2022.
                    </p>
                </div>
                <div className={footerStyles.footerRight}>
                    <div className={footerStyles.iconsContainer}>
                        <a href="https://www.linkedin.com/in/florianmaas/" target='blank'>
                            <FontAwesomeIcon icon={["fab", "linkedin-in"]} className={footerStyles.icon} />
                        </a>
                        <div className={footerStyles.iconDivider}></div>
                        <a href="https://github.com/fpgmaas" target='blank'>
                            <FontAwesomeIcon icon={["fab", "github"]} className={footerStyles.icon} />
                        </a>
                        <div className={footerStyles.iconDivider}></div>
                        <a href="https://stackoverflow.com/users/8037249/florian" target='blank'>
                            <FontAwesomeIcon icon={["fab", "stack-overflow"]} className={footerStyles.icon} />
                        </a>
                        <div className={footerStyles.iconDivider}></div>
                        <a href="https://twitter.com/fpgmaas" target='blank'>
                            <FontAwesomeIcon icon={["fab", "twitter"]} className={footerStyles.icon} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer