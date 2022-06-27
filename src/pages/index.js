import Layout from "../components/layout"
import * as styles from "./index.module.scss"
import SEO from "../components/seo.js"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import React, { useRef, useEffect } from "react"
import Typed from "typed.js"

import FrontImg from "../../static/florian.jpg"

library.add(fab)

const IndexPage = () => {
  const typeTarget = useRef(null)

  useEffect(() => {
    const typed = new Typed(typeTarget.current, {
      strings: [
        "<span style='color:#538cc6'>data scientist</span>.",
        "<span style='color:#538cc6'>data engineer</span>.",
        "<span style='color:#538cc6'>web development enthusiast</span>.",
      ],
      typeSpeed: 40,
      backSpeed: 20,
      loop: true,
    })

    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <>
      <SEO />
      <Layout>
        <div className={styles.contentContainer}>
            <div className={styles.topContent}>
              <div className={styles.imageContainer}>
                <img src={FrontImg} alt="Florian" className={styles.image} />
              </div>
              <div className={styles.typewriterContainer}>
                <div className={styles.typewriterText}>
                  <p>Hi, I'm Florian Maas,</p>
                </div>
                <div className={styles.typewriterText}>
                  <span>a&nbsp;</span>
                  <span ref={typeTarget} />
                </div>
                <br></br>
                <p>
                  I'm passionate about data, algorithms, computer science and the intersection of those fields.
                  </p><p>
                  I also enjoy experimenting with web frameworks and libraries such as Gatsby and React.
                  This website is the result of one of those experiments. The
                  source code for this website is available on{" "}
                  <a
                    href="https://github.com/fpgmaas/fpgmaas.com"
                    target="_blank"
                  >
                    {" "}
                    GitHub
                  </a>
                  .
                </p>
              </div>
            </div>           
          </div>
      </Layout>
    </>
  )
}

export default IndexPage