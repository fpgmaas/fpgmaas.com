import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout'
import * as projectStyles from './projects.module.scss'
import SEO from '../components/seo.js'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faUpRightFromSquare
  } from '@fortawesome/free-solid-svg-icons'
  import {
    faStar  
  } from '@fortawesome/free-regular-svg-icons'

import simpleHomepageImg from "../../static/simple-homepage.png"
import cookiecutterPoetryImg from "../../static/cookiecutter.png"
import { color } from "d3"


// https://api.github.com/repos/fpgmaas/cookiecutter-poetry?page=$i&per_page=100

const IndexPage = () => {

  return (
    <>
      <SEO />
      <Layout>
        <div className={projectStyles.contentContainer}>
          <div className={projectStyles.content}>

            <div className={projectStyles.projectContainer}>
              <img src={simpleHomepageImg} alt="simple-homepage" className={projectStyles.image} />
              <div className={projectStyles.textContainer}>
                <h2 className={projectStyles.title}>simple-homepage</h2>
                <div className={projectStyles.iconsContainer}>
                  <a href="https://github.com/fpgmaas" target='blank'>
                    <FontAwesomeIcon icon={faUpRightFromSquare} className={projectStyles.icon} />
                  </a>
                  <FontAwesomeIcon icon={faStar} className={projectStyles.starIcon} />
                  <p className={projectStyles.starText}>84</p>
                </div>
                <p className={projectStyles.description}>A command line utility that helps you create a personal homepage for your browser.</p>
              </div>
            </div>

            <div className={projectStyles.projectContainer}>
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
