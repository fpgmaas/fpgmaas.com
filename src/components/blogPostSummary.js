import React from "react"
import * as styles from "./blogpostsummary.module.scss"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const BlogPostSummary = ({title, description, slug, date, featuredImage }) => {
  return (
    <div className={styles.postContainer}>
      <Link to={`/blog/${slug}`} class={styles.link}>
        <div className={styles.post}>
          <div className={styles.imageContainer}>
            <Img
              fluid={featuredImage.childImageSharp.fluid}
            />
          </div>
          <div className={styles.textContainer}>
            <div>
              <h2 className={styles.title}>
                {title}
              </h2>
              <p className={styles.description}>
                {description}
              </p>
            </div>
            <div className={styles.dateContainer}>
              <FontAwesomeIcon icon={["far", "fa-calendar"]} />
              <p className={styles.date}>{date}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default BlogPostSummary
