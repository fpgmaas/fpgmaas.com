import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout'
import * as layoutStyles from './index.module.scss'

import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

library.add(fas, fab);


const IndexPage = () => {

  return (
    <Layout>
      <h1 className={layoutStyles.name}>
        Florian Maas
      </h1>
      <h4 className={layoutStyles.title}>
        Senior Data Scientist Logistics at IKEA
      </h4>
      <div className={layoutStyles.iconContainer}>
        <hr className={layoutStyles.lineLeft}></hr>
        <a href="https://www.linkedin.com/in/florianmaas/" target='blank'>
          <FontAwesomeIcon icon={["fab", "linkedin-in"]} className={layoutStyles.iconFront} />
        </a>
        <a href="https://github.com/fpgmaas" target='blank'>
          <FontAwesomeIcon icon={["fab", "github"]} className={layoutStyles.iconFront} />
        </a>
        <a href="https://stackoverflow.com/users/8037249/florian" target='blank'>
          <FontAwesomeIcon icon={["fab", "stack-overflow"]} className={layoutStyles.iconFront} />
        </a>
        <hr className={layoutStyles.lineRight}></hr>
      </div>
    </Layout>
  )
}

export default IndexPage
