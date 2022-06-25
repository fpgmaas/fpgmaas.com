import Layout from "../components/layout"
import * as styles from "./about.module.scss"
import SEO from "../components/seo.js"
import React from "react"
import SkillLogo from "../components/index/skillLogo"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFileLines } from "@fortawesome/free-regular-svg-icons"

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
          <div className={styles.textContainer}>
            <h1>About me</h1>
            <p>
              Hi, I'm Florian, a data scientist/engineer living in The Hague,
              the Netherlands. I graduated in Econometrics with a specialization
              in Quantiative Logistics & Operations Research from Erasumus
              University in 2014. Since then I have worked in a variety of
              positions, working with a variety of technologies. Currently, I am
              working at IKEA, where I aim to develop and deploy models from the
              field of Operations Research in order to optimize the in-store
              logistics.
            </p>
            <p>
              I enjoy experimenting with new tchnologies, I get energy from
              ...,intrinsically motivated
            </p>
          </div>

          <div className={styles.skills}>
            <h3> Things I enjoy working with</h3>
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

          <a href={`CV_Florian_Maas.pdf`} download class={styles.downloadContainer}>
              <div class={styles.iconContainer}>
                <FontAwesomeIcon icon={faFileLines} />
              </div>
              <p>Download CV</p>
          </a>

        </div>
      </Layout>
    </>
  )
}

export default AboutPage
