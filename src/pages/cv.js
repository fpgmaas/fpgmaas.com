import React from "react"
import Layout from '../components/layout'
import SEO from '../components/seo.js'

import * as cvStyles from './cv.module.scss'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleDown} from "@fortawesome/free-regular-svg-icons";

import downloadFile from '../../static/CV_Florian_Maas.pdf'


const ContactPage = () => {
  return (
    <>
      <SEO title="Curriculum Vitae" url='cv' description='Download my CV.' />
      <Layout>
        <div className={cvStyles.contentContainer}>
          <a href={`CV_Florian_Maas.pdf`} download>
            <div class={cvStyles.downloadContainer}>
              <div class={cvStyles.iconContainer}>
                <FontAwesomeIcon icon={faArrowAltCircleDown} />
              </div>
              <p>Download</p>
            </div>
          </a>
        </div>
      </Layout>
    </>
  )
}

export default ContactPage
