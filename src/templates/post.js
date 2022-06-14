import React from "react"
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import { MDXRenderer } from "gatsby-plugin-mdx"
import SEO from '../components/seo.js'

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
      date(formatString: "MMMM DD, YYYY", locale: "en")
      author
      reading_time
    }
    body
  }
}
`

const Post = (props) => {
  return (
    <>
      <SEO 
        title={props.data.mdx.frontmatter.title} 
        description = {props.data.mdx.frontmatter.subtitle}
        url={`blog/${props.data.mdx.frontmatter.slug}`} 
        />
      <Layout>
        <div className={postStyles.contentContainer}>
          <div className={postStyles.content}>
            <h1 className={postStyles.title}>{props.data.mdx.frontmatter.title}</h1>
            <h3 className={postStyles.subtitle}>{props.data.mdx.frontmatter.subtitle}</h3>
            <div className={postStyles.postDetails}>
              <p className={postStyles.author}>{props.data.mdx.frontmatter.author}</p>
              <p className={postStyles.date}>{props.data.mdx.frontmatter.date}</p>
              {props.data.mdx.frontmatter.reading_time ? <p className={postStyles.readingTime}>Reading time {props.data.mdx.frontmatter.reading_time}</p> : <></>}
            </div>
            <hr className={postStyles.lineLeft} />
            <MDXRenderer>{props.data.mdx.body}</MDXRenderer>
          </div>
        </div>
      </Layout>
    </>

  )
}

export default Post