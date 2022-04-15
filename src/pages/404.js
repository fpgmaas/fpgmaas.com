import React from "react"
import Layout from '../components/layout'
import SEO from '../components/seo.js'

import CalvinHobbesImg from "../../static/calvinhobbes404.png"

import * as page404Styles from './404.module.scss'


const ContactPage = () => {
  return (
    <>
      <SEO title="404" url='404' description='Page not found.' />
      <Layout>
        <div className = {page404Styles.contentContainer}>
          <h2>404: Page not found! </h2>
          <img src={CalvinHobbesImg} alt="We are looking for your page..." className={page404Styles.image} />
        </div>
      </Layout>
    </>
  )
}

export default ContactPage
