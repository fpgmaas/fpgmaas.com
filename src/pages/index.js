import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout'

import { FaStackOverflow, FaGithub, FaLinkedin } from 'react-icons/fa'

const IndexPage = () => {
  return (
    <Layout>
      <h1>
        Hello!
      </h1>
      <h2>
        I am Florian Maas.
      </h2>
      <p>Link to contact page? <Link to='/contact'>Contact me!</Link></p>
      <div class="main">
        <div class="center-container">
            <div class="item">
                <a href="https://github.com">
                <FaGithub />
                </a>
            </div>
            <div class="item">
                <a href="https://stackoverflow.com">
                <FaStackOverflow />
                </a>
            </div>
            <div class="item">
                <a href="https://linkedin.com">
                <FaLinkedin />
                </a>
            </div>
        </div>
    </div>
    </Layout>
  )
}

export default IndexPage
