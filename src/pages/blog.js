import React from "react"
import { graphql, useStaticQuery, Link } from 'gatsby'
import Layout from '../components/layout'
import * as blogStyles from './blog.module.scss'
import SEO from '../components/seo.js'


import { library } from "@fortawesome/fontawesome-svg-core"
import { far } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

library.add(far);

const Blog = () => {
    const data = useStaticQuery(graphql`
    query {
        allMdx(
            sort: { fields: [frontmatter___date, frontmatter___title], order: DESC }
        ) {
            edges {
                node {
                    frontmatter {
                        title
                        date
                        subtitle
                        reading_time
                        slug
                    }
                }
            }
        }
    }
    `
    )

    return (
        <>
        <SEO title = 'Blog' url = 'blog' />
        <Layout>
            <div className={blogStyles.content}>
                <hr className = {blogStyles.line}></hr>
                {data.allMdx.edges.map((edge) => {
                    return (
                        <ul className={blogStyles.list}>
                            <li className={blogStyles.post}>
                                <Link to={`/blog/${edge.node.frontmatter.slug}`}>
                                    <div>
                                        <h2 className={blogStyles.title}>{edge.node.frontmatter.title}</h2>
                                        <p className={blogStyles.subtitle}>{edge.node.frontmatter.subtitle}</p>
                                    </div>
                                    <div className = {blogStyles.dateContainer}>
                                    <FontAwesomeIcon icon={["far", "fa-calendar"]} />
                                    <p className={blogStyles.date}>{edge.node.frontmatter.date}</p>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    )
                })}
            </div>

        </Layout>
        </>

    )
}

export default Blog