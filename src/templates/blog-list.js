import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import * as styles from "./blog-list.module.scss"
import SEO from "../components/seo.js"

import BlogPostSummary from "../components/blogPostSummary"

import { library } from "@fortawesome/fontawesome-svg-core"
import { far } from "@fortawesome/free-regular-svg-icons"

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
          <div className={styles.contentContainer}>
            <div className={styles.content}>
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
              <div className={styles.navigationContainer}>
                <div className={styles.navigationContainerLeft}>
                  {!isFirst && (
                    <Link
                      to={"/blog/" + prevPage}
                      className={styles.navLink}
                      rel="prev"
                    >
                      ← Previous Page
                    </Link>
                  )}
                </div>
                <div className={styles.navigationContainerRight}>
                  {!isLast && (
                    <Link
                      to={"/blog/" + nextPage}
                      className={styles.navLink}
                      rel="next"
                    >
                      Next Page →
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
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
