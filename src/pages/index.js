import React from "react"
import Layout from "../components/layout"
import * as styles from "./index.module.scss"
import SEO from "../components/seo.js"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import FrontImg from "../../static/florian.jpg"

library.add(fab)

const IndexPage = () => {
  return (
    <>
      <SEO />
      <Layout>
        <div className={styles.contentContainer}>
          <div className={styles.content}>
            <div className={styles.contentBox}>
              <div className={styles.imageContainer}>
                <img src={FrontImg} alt="Florian" className={styles.image} />
              </div>
            </div>
            <div className={styles.contentBox}>
              <div className={styles.textContainer}>
                <h1 className={styles.title}>Hello!</h1>
                <p className={styles.text}>
                  I am Florian Maas, a data scientist & data engineer living in
                  The Hague, the Netherlands.
                  <br />
                  <br />
                  I enjoy working with Python, writing clean code, and getting
                  in over my head while trying to build things with web
                  frameworks that I lack the required experience in.
                  <br />
                  <br />
                  This website is the result of one of these situations. The
                  source code for this website is available on{" "}
                  <a href="https://github.com/fpgmaas/fpgmaas.com">GitHub</a>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default IndexPage
