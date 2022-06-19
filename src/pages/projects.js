import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import * as projectStyles from "./projects.module.scss"
import SEO from "../components/seo.js"

import simpleHomepageImg from "../../static/projects/simple-homepage.png"
import cookiecutterPoetryImg from "../../static/projects/cookiecutter.png"
import Project from "../components/project"

// https://api.github.com/repos/fpgmaas/cookiecutter-poetry?page=$i&per_page=100

const IndexPage = () => {
  const [jsonData, setJsonData] = React.useState()
  useEffect(() => {
    getGitHubData()
  }, [])

  const getGitHubData = async () => {
    const response = await fetch("https://api.github.com/users/fpgmaas/repos")
    const jsonData = await response.json()
    setJsonData(jsonData)
    console.log(jsonData)
  }

  const getNumberOfStars = repository => {
    if (jsonData) {
      console.log(jsonData)
      var stars = jsonData.filter(e => e.name == repository)[0][
        "stargazers_count"
      ]
      return stars
    } else {
      return ""
    }
  }

  return (
    <>
      <SEO
        title="Projects"
        url="projects"
        description="An overview of my most recent open-source projects."
      />
      <Layout>
        <div className={projectStyles.contentContainer}>
          <div className={projectStyles.content}>
            <Project
              url="https://fpgmaas.github.io/cookiecutter-poetry/"
              title="cookiecutter-poetry"
              description="A command line utility to generate the file structure for a Python project that uses Poetry for its dependency management."
              image={cookiecutterPoetryImg}
              stars={getNumberOfStars("cookiecutter-poetry")}
            />
            <Project
              url="https://fpgmaas.github.io/simple-homepage/"
              title="simple-homepage"
              description="A command line utility that helps you create a personal homepage for your browser."
              image={simpleHomepageImg}
              stars={getNumberOfStars("simple-homepage")}
            />
          </div>
        </div>
      </Layout>
    </>
  )
}

export default IndexPage
