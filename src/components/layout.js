import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import "../styles/default.scss"
import * as styles from "./layout.module.scss"

import { MDXProvider } from "@mdx-js/react"
import { MyPlotly } from "./utils/MyPlotly"

const shortcodes = { MyPlotly }

const Layout = props => {
  return (
    <MDXProvider components={shortcodes}>
      <div className={styles.page}>
        <Header />
        {props.children}
        <Footer />
      </div>
    </MDXProvider>
  )
}

export default Layout
