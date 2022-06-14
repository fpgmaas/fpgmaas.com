import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout'
import * as projectStyles from './projects.module.scss'
import SEO from '../components/seo.js'

import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import simpleHomepageImg from "../../static/simple-homepage.png"
import cookiecutterPoetryImg from "../../static/cookiecutter.png"


library.add(fab);

// https://api.github.com/repos/fpgmaas/cookiecutter-poetry?page=$i&per_page=100

const IndexPage = () => {

  return (
    <>
      <SEO />
      <Layout>
        <div className={projectStyles.contentContainer}>
          <div className={projectStyles.content}>
            <div className ={projectStyles.projectContainer}>
            <img src={simpleHomepageImg} alt="simple-homepage" className={projectStyles.image} />
            <div className={projectStyles.textContainer}>
            <h2>simple-homepage</h2>
            <p>A command line utility that helps you create a personal homepage for your browser.</p>
            </div>
            </div>
            <div className ={projectStyles.projectContainer}>
            <img src={cookiecutterPoetryImg} alt="cookiecutter-poetry" className={projectStyles.image} />
            <div className={projectStyles.textContainer}>
            <h2>cookiecutter-poetry</h2>
            <p>A command line utility to generate the file structure for a Python project that uses Poetry for its dependency management.</p>
            </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default IndexPage
