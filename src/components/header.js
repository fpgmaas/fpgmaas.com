import React from "react"
import { Link } from "gatsby"
import * as styles from "./header.module.scss"

const Header = () => {
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
            to="/about"
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  )

  return <header className={styles.header}>{nav_list}</header>
}

export default Header
