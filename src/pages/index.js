import React from "react"
import { Link } from 'gatsby'
import Layout from '../components/layout'
import * as indexStyles from './index.module.scss'

import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

library.add(fab);


const IndexPage = () => {

  return (
    <Layout>
      <div className={indexStyles.content}>

        <h1 className={indexStyles.name}>
          Florian Maas
        </h1>
        <h4 className={indexStyles.title}>
          Senior Data Scientist Logistics at IKEA
        </h4>
        <div className={indexStyles.iconsContainer}>
          <hr className={indexStyles.lineLeft}></hr>
          <a href="https://www.linkedin.com/in/florianmaas/" target='blank'>
            <FontAwesomeIcon icon={["fab", "linkedin-in"]} className={indexStyles.icon} />
          </a>
          <a href="https://github.com/fpgmaas" target='blank'>
            <FontAwesomeIcon icon={["fab", "github"]} className={indexStyles.icon} />
          </a>
          <a href="https://stackoverflow.com/users/8037249/florian" target='blank'>
            <FontAwesomeIcon icon={["fab", "stack-overflow"]} className={indexStyles.icon} />
          </a>
          <hr className={indexStyles.lineRight}></hr>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
