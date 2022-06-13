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
            <div className={indexStyles.contentLeft}>
            <div className = {indexStyles.imageContainer}>
            <img src={FrontImg} alt="We are looking for your page..." className={indexStyles.image} />
            </div>
            </div>
            <div className={indexStyles.contentRight}>
            <h1 className={indexStyles.name}>
            Hello!
            </h1>
            <h4 className={indexStyles.title}>
            I am Florian Maas, a data scientist & data engineer living in The Hague, the Netherlands.

            <br/>
            <br/>
            
            I enjoy working with Python.
            </h4>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default IndexPage
