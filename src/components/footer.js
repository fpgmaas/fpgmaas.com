import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import * as footerStyles from './footer.module.scss'


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
            <p className={footerStyles.text}>
                Created by {data.site.siteMetadata.author}, © 2022.
            </p>
        </footer>
    )
}

export default Footer