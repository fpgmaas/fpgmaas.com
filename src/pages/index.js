import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { FaStackOverflow, FaGithub, FaLinkedin } from 'react-icons/fa'
import * as layoutStyles from './index.module.scss'


const IndexPage = () => {
  return (
    <Layout>
      <h1 className={layoutStyles.name}>
        Florian Maas
      </h1>
      <h4 className={layoutStyles.title}>
        Senior Data Scientist Logistics at IKEA
      </h4>
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
