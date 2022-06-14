import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import * as headerStyles from './header.module.scss'

const Header = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
            }
        }
        }
    `)

    const nav_list = <nav>
        <ul className={headerStyles.navList}>
            <li>
                <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/'>
                    Home
                </Link>
            </li>
            <li>
                <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/projects'>
                    Projects
                </Link>
            </li>
            <li>
                <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/blog'>
                    Blog
                </Link>
            </li>
            <li>
                <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/contact'>
                    Contact
                </Link>
            </li>
            <li>
                <Link className={headerStyles.navItem} activeClassName={headerStyles.activeNavItem} to='/cv'>
                    CV
                </Link>
            </li>
        </ul>
    </nav>

    return (
        <header className={headerStyles.header}>
            {nav_list}
        </header>
    )
}

export default Header