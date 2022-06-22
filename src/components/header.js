import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import * as styles from "./header.module.scss"

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

  const nav_list = (
    <nav>
      <ul className={styles.navList}>
        <li>
          <Link
            className={styles.navItem}
            activeClassName={styles.activeNavItem}
            to="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={styles.navItem}
            activeClassName={styles.activeNavItem}
            to="/projects"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            className={styles.navItem}
            activeClassName={styles.activeNavItem}
            to="/blog"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            className={styles.navItem}
            activeClassName={styles.activeNavItem}
            to="/cv"
          >
            CV
          </Link>
        </li>
      </ul>
    </nav>
  )

  return <header className={styles.header}>{nav_list}</header>
}

export default Header
