import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo.js"

import * as styles from "./cv.module.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowAltCircleDown } from "@fortawesome/free-regular-svg-icons"

const ContactPage = () => {
  return (
    <>
      <SEO title="Curriculum Vitae" url="cv" description="Download my CV." />
      <Layout>
        <div className={styles.contentContainer}>
          <a href={`CV_Florian_Maas.pdf`} download>
            <div class={styles.downloadContainer}>
              <div class={styles.iconContainer}>
                <FontAwesomeIcon icon={faArrowAltCircleDown} />
              </div>
              <p>Download</p>
            </div>
          </a>
        </div>
      </Layout>
    </>
  )
}

export default ContactPage
