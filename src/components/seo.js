import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, description, url, article }) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          url
          title
          description
        }
      }
    }
  `)
  const defaults = data.site.siteMetadata

  const seo = {
    title: title ? `${title} | Florian Maas` : defaults.title,
    description: description || defaults.description,
    url: url ? `${defaults.url}/${url}` : defaults.url,
  }

  return (
    <Helmet title={seo.title} htmlAttributes={{ lang: "en" }}>
      <meta property="keywords" content={"Python, Data Science, Javascript"} />

      {seo.url && <meta name="url" content={seo.url} />}
      {seo.url && <meta property="og:url" content={seo.url} />}

      {seo.title && <meta name="title" content={seo.title} />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.title && <meta name="twitter:title" content={seo.title} />}

      {seo.description && <meta name="description" content={seo.description} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}

      {(article ? true : null) && <meta property="og:type" content="article" />}
    </Helmet>
  )
}

export default SEO
