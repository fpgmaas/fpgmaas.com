import React from "react"
import Layout from '../components/layout'

import * as contactStyles from './contact.module.scss'

import { library } from "@fortawesome/fontawesome-svg-core"
import { far } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

library.add(far);

const ContactPage = () => {
  return (
    <Layout>
      <div class={contactStyles.emailContainer}>
        <div class={contactStyles.iconContainer}>
          <FontAwesomeIcon icon={["far", "envelope"]} />
        </div>
        <p class={contactStyles.email}>fpgmaas@gmail.com</p>
      </div>
    </Layout>
  )
}

export default ContactPage
