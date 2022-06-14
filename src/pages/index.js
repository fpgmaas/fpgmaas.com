import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout'
import * as indexStyles from './index.module.scss'
import SEO from '../components/seo.js'

import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import FrontImg from "../../static/florian.jpg"


library.add(fab);


const IndexPage = () => {

  return (
    <>
      <SEO />
      <Layout>
        <div className={indexStyles.contentContainer}>
          <div className={indexStyles.content}>
            <div className={indexStyles.contentBox}>
            <div className = {indexStyles.imageContainer}>
            <img src={FrontImg} alt="We are looking for your page..." className={indexStyles.image} />
            </div>
            </div>
            <div className={indexStyles.contentBox}>
            <div className={indexStyles.textContainer}>
            <h1 className={indexStyles.title}>
            Hello!
            </h1>
            <p className={indexStyles.text}>
            I am Florian Maas, a data scientist & data engineer living in The Hague, the Netherlands.
            <br/>
            <br/>
            I enjoy working with Python, writing clean code, and trying to build things with web frameworks that 
            I definitely do not have enough experience in and then continually asking myself if what I am doing makes any sense at all.
            <br/>
            <br/>
            You are currently looking at one of those attempts.
            The source code for this website is available on <a href= "https://github.com/fpgmaas/fpgmaas.com">GitHub</a>.
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
