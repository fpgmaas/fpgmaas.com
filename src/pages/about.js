import Layout from "../components/layout"
import * as styles from "./about.module.scss"
import SEO from "../components/seo.js"
import React, { useRef, useEffect } from "react"
import SkillLogo from "../components/index/skillLogo"

import PythonLogo from "../../static/logos/python.svg"
import DockerLogo from "../../static/logos/docker.svg"
import AwsLogo from "../../static/logos/aws.svg"
import GcpLogo from "../../static/logos/gcp.svg"
import GatsbyLogo from "../../static/logos/gatsby.svg"
import JavascriptLogo from "../../static/logos/javascript.svg"
import PlotlyLogo from "../../static/logos/plotly.svg"
import TerraformLogo from "../../static/logos/terraform.svg"
import SparkLogo from "../../static/logos/spark.svg"

const AboutPage = () => {
  return (
    <>
      <SEO title="About" url="about" description="About me." />
      <Layout>
        <div className={styles.contentContainer}>
          <h1>About me</h1>
          <div className={styles.skills}>
            <h3> Thing I like to work with</h3>
            <br></br>
            <div className={styles.skills}>
              <div className={styles.skill}>
                <SkillLogo name="Python" logo={PythonLogo} color="darkblue" />
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
                <SkillLogo name="Spark" logo={SparkLogo} color="darkblue" />
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
      </Layout>
    </>
  )
}

export default AboutPage
