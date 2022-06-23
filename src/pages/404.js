import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo.js"

import CalvinHobbesImg from "../../static/calvinhobbes404.png"

import * as styles from "./404.module.scss"

const ContactPage = () => {
  return (
    <>
      <SEO title="404" url="404" description="Page not found." />
      <Layout>
        <div className={styles.contentContainer}>
          <h2>404: Page not found! </h2>
          <img
            src={CalvinHobbesImg}
            alt="We are looking for your page..."
            className={styles.image}
          />
        </div>
      </Layout>
    </>
  )
}

export default ContactPage
