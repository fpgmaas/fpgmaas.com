import Layout from "../components/layout"
import * as styles from "./index.module.scss"
import SEO from "../components/seo.js"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import React, { useRef, useEffect } from "react"
import Typed from "typed.js"
import SkillLogo from "../components/index/skillLogo"

import FrontImg from "../../static/florian.jpg"
import PythonLogo from "../../static/logos/python.svg"
import DockerLogo from "../../static/logos/docker.svg"
import AwsLogo from "../../static/logos/aws.svg"
import GcpLogo from "../../static/logos/gcp.svg"
import GatsbyLogo from "../../static/logos/gatsby.svg"
import JavascriptLogo from "../../static/logos/javascript.svg"
import PlotlyLogo from "../../static/logos/plotly.svg"
import TerraformLogo from "../../static/logos/terraform.svg"
import SparkLogo from "../../static/logos/spark.svg"

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
          <div className={styles.content}>
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
                  I enjoy working with Python, writing clean code, and getting
                  in over my head while trying to build things with web
                  frameworks that I lack the required experience in.
                  <p></p>
                  This website is the result of one of these situations. The
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

                <h3> Thing I like to work with</h3>
                <br></br>
                <div className={styles.skills}>
                <div className={styles.skill}>
                  <SkillLogo name="Python" logo={PythonLogo} />
                </div>
                <div className={styles.skill}>
                  <SkillLogo name="Terraform" logo={TerraformLogo} />
                </div>
                <div className={styles.skill}>
                  <SkillLogo name="GCP" logo={GcpLogo} />
                </div>
                <div className={styles.skill}>
                  <SkillLogo name="AWS" logo={AwsLogo} />
                </div>
                <div className={styles.skill}>
                  <SkillLogo name="Docker" logo={DockerLogo} />
                </div>
                <div className={styles.skill}>
                  <SkillLogo name="Spark" logo={SparkLogo} />
                </div>
                <div className={styles.skill}>
                  <SkillLogo name="Javascript" logo={JavascriptLogo} />
                </div>
                <div className={styles.skill}>
                  <SkillLogo name="Gatsby" logo={GatsbyLogo} />
                </div>
                <div className={styles.skill}>
                  <SkillLogo name="Plotly" logo={PlotlyLogo} />
                </div>
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
