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
      <span className="fa-stack fa-2x" style = {{marginLeft:0}}>
        <FontAwesomeIcon icon={["fas", "circle"]} className={`fa-stack-2x ${layoutStyles.iconBack}`}/>
        <FontAwesomeIcon icon={["fab", "linkedin-in"]} className={`fa-stack-1x ${layoutStyles.iconFront}`} />
      </span>
      <span className="fa-stack fa-2x">
        <FontAwesomeIcon icon={["fas", "circle"]} className={`fa-stack-2x ${layoutStyles.iconBack}`} color = 'blue'/>
        <FontAwesomeIcon icon={["fab", "github"]} className={`fa-stack-1x ${layoutStyles.iconFront}`} color = 'white'/>
      </span>
      <span className="fa-stack fa-2x">
        <FontAwesomeIcon icon={["fas", "circle"]} className={`fa-stack-2x ${layoutStyles.iconBack}`} color = 'blue'/>
        <FontAwesomeIcon icon={["fab", "stack-overflow"]} className={`fa-stack-1x ${layoutStyles.iconFront}`} color = 'white'/>
      </span>
      </div>
    </Layout>
  )
}

export default IndexPage
