import React from "react"
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { MDXRenderer } from "gatsby-plugin-mdx"

export const query = graphql`
query($slug: String) {
  mdx (
    frontmatter: {
      slug: {
        eq: $slug
      }
    }
  )
  {
    frontmatter {
      slug
      title
      subtitle
      date
    }
    body
  }
}
`

const Blog = (props) => {
    return (
        <Layout>
            <h1>{props.data.mdx.frontmatter.title}</h1>
            <h3>{props.data.mdx.frontmatter.subtitle}</h3>
            <p>{props.data.mdx.frontmatter.date}</p>
            <MDXRenderer>{props.data.mdx.body}</MDXRenderer>
        </Layout>

    )
}

export default Blog