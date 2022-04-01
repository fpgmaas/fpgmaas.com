import React from "react"
import { graphql, useStaticQuery, Link } from 'gatsby'
import Layout from '../components/layout'


const Blog = () => {
    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark {
            edges {
                node {
                    frontmatter {
                        title
                        date
                        slug
                    }
                    fields {
                        slug
                    }
                }
            }
        }
    }
    `
    )

    return (
        <Layout>
            <h1>Blog</h1>
            <ol>
                {data.allMarkdownRemark.edges.map((edge) => {
                    return (
                    <li>
                        <Link to={`/blog/${edge.node.fields.slug}`}>
                        <h2>{edge.node.frontmatter.title}</h2>
                        </Link>
                        <p>{edge.node.frontmatter.date}</p>
                    </li>
                    )
                })}
            </ol>

        </Layout>

    )
}

export default Blog