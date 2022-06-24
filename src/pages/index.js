import Layout from "../components/layout"
import * as styles from "./index.module.scss"
import SEO from "../components/seo.js"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import FrontImg from "../../static/florian.jpg"
import React, { useRef, useEffect } from "react"
import Typed from "typed.js"

library.add(fab)

const IndexPage = () => {
  const typeTarget = useRef(null)
  const typeTarget2 = useRef(null)

  useEffect(() => {
    const typed = new Typed(typeTarget.current, {
      strings: [
        "<span style='color:#538cc6'>data scientist</span>.",
        "<span style='color:#538cc6'>data engineer</span>.",
        "<span style='color:#538cc6'>web development enthusiast</span>.",
      ],
      typeSpeed: 70,
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
          <div className={styles.content}>
            <div className={styles.topContent}>
              <div className={styles.imageContainer}>
                <img src={FrontImg} alt="Florian" className={styles.image} />
              </div>
              <div className={styles.typewriterContainer}>
                <div className={styles.typewriter}>
                  <p className={styles.typewriterText}>
                    Hi, I'm Florian Maas,
                  </p>
                  <span className={styles.typewriterText}>
                    a&nbsp;
                  </span>
                  <span ref={typeTarget} className={styles.typewriterText} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default IndexPage
