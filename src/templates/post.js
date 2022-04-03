import React from "react"
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { MDXRenderer } from "gatsby-plugin-mdx"

import * as postStyles from './post.module.scss'


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
      author
      reading_time
    }
    body
  }
}
`

const Post = (props) => {
  return (
    <Layout>
      <div className={postStyles.content}>

        <h1 className = {postStyles.title}>{props.data.mdx.frontmatter.title}</h1>
        <h3 className = {postStyles.subtitle}>{props.data.mdx.frontmatter.subtitle}</h3>

        <div className = {postStyles.postDetails}>
          <p className = {postStyles.author}>{props.data.mdx.frontmatter.author}</p>
          <p className = {postStyles.date}>{props.data.mdx.frontmatter.date}</p>
          <p className = {postStyles.readingTime}>Reading time {props.data.mdx.frontmatter.reading_time}</p>
        </div>
        <hr className={postStyles.lineLeft} />

        <MDXRenderer>{props.data.mdx.body}</MDXRenderer>
      </div>
    </Layout>

  )
}

export default Post