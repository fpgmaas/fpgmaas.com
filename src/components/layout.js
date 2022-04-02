import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import '../styles/default.scss'
import * as layoutStyles from './layout.module.scss'

import { MDXProvider } from "@mdx-js/react"
import MyPlotly from './MyPlotly'

const shortcodes = { MyPlotly }

const Layout = (props) => {
    return (
        <MDXProvider components={shortcodes}>
            <div className={layoutStyles.page}>
                <Header />
                <div className={layoutStyles.contentContainer}>
                    <div className={layoutStyles.content}>
                        {props.children}
                    </div>
                </div>
                <Footer />
            </div>
        </MDXProvider>
    )
}

export default Layout