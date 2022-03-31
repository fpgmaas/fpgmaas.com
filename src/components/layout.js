import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import '../styles/default.scss'
import * as layoutStyles from './layout.module.scss'


const Layout = (props) => {
    return (
        <div className={layoutStyles.page}>
            <Header />
            <div className={layoutStyles.contentContainer}>
                <div className={layoutStyles.content}>
                    {props.children}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Layout