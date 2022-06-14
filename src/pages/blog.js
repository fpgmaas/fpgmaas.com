import React from "react"
import { graphql, useStaticQuery, Link } from 'gatsby'
import Layout from '../components/layout'
import * as blogStyles from './blog.module.scss'
import SEO from '../components/seo.js'
import Img from "gatsby-image"

import { library } from "@fortawesome/fontawesome-svg-core"
import { far } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

library.add(far);

const Blog = () => {
    const data = useStaticQuery(graphql`
        query {
        allMdx(
          	filter: {frontmatter: { type :{eq: "post"}}},
            sort: { fields: [frontmatter___date, frontmatter___title], order: DESC }
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
                              fixed(width:200) {
                                ...GatsbyImageSharpFixed
                              }
                            }
                          }
                    }
                }
            }
        }
    }
  
    `
    )

    return (
        <>
            <SEO title='Blog' url='blog' description = 'An overview of my blog posts.'/>
            <Layout>
                <div className={blogStyles.contentContainer}>
                    <div className={blogStyles.content}>
                        <hr className={blogStyles.line}></hr>
                        {data.allMdx.edges.map((edge) => {
                            return (
                                <div>
                                    <div className={blogStyles.post}>
                                        <Link to={`/blog/${edge.node.frontmatter.slug}`}>
                                            <div>
                                                <h2 className={blogStyles.title}>{edge.node.frontmatter.title}</h2>
                                                <p className={blogStyles.subtitle}>{edge.node.frontmatter.description}</p>
                                            </div>

                                                <Img
                                                fixed={edge.node.frontmatter.featuredImage.childImageSharp.fixed}
                                                />

                                            <div className={blogStyles.dateContainer}>
                                                <FontAwesomeIcon icon={["far", "fa-calendar"]} />
                                                <p className={blogStyles.date}>{edge.node.frontmatter.date}</p>
                                            </div>
                                        </Link>
                                    </div>
                                    <hr className={blogStyles.line}></hr>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Blog