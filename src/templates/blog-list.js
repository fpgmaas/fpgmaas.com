import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Layout from "../components/layout"
import * as blogStyles from "./blog-list.module.scss"
import SEO from "../components/seo.js"
import Img from "gatsby-image"

import BlogPostSummary from "../components/blogPostSummary"

import { library } from "@fortawesome/fontawesome-svg-core"
import { far } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

library.add(far)

class BlogList extends React.Component {
  render() {
    const { data } = this.props
    const { currentPage, numPages } = this.props.pageContext
    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? "" : (currentPage - 1).toString()
    const nextPage = (currentPage + 1).toString()

    return (
      <>
        <SEO
          title="Blog"
          url="blog"
          description="An overview of my blog posts."
        />
        <Layout>
          <div className={blogStyles.contentContainer}>
            <div className={blogStyles.content}>
              {data.allMdx.edges.map(edge => {
                return (
                  <BlogPostSummary
                    title={edge.node.frontmatter.title}
                    description={edge.node.frontmatter.description}
                    slug={edge.node.frontmatter.slug}
                    date={edge.node.frontmatter.date}
                    featuredImage={edge.node.frontmatter.featuredImage}
                  />
                )
              })}
            </div>
          </div>

          {!isFirst && (
            <Link to={'/blog/' + prevPage} rel="prev">
              ← Previous Page
            </Link>
          )}
          {!isLast && (
            <Link to={'/blog/' + nextPage} rel="next">
              Next Page →
            </Link>
          )}
        </Layout>
      </>
    )
  }
}

export default BlogList

export const pageQuery = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!) {
    allMdx(
      filter: { frontmatter: { type: { eq: "post" } } }
      sort: { fields: [frontmatter___date, frontmatter___title], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY", locale: "en")
            subtitle
            reading_time
            slug
            type
            description
            featuredImage {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
