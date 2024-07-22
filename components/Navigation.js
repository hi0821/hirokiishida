'use client'

import {useState} from 'react'
import Link from 'next/link'
import styles from '@/styles/navigation.module.scss'

export default function Navigation() {
  const [navIsOpen, setNavIsOpen] = useState(false)

  const toggleNav = () => {
    setNavIsOpen((prev) => !prev)
  }

  const closeNav = () => {
    setNavIsOpen(false)
  }

  return (
    <>
      <nav className={navIsOpen ? styles.on : styles.off}>
        <ul className={styles.navigation_list}>
          <li className={styles.navigation_item}>
            <Link href="/about" onClick={closeNav}>ABOUT</Link>
          </li>
          <li className={styles.navigation_item}>
            <Link href="/works" onClick={closeNav}>WORKS</Link>
          </li>
        </ul>
        <div className={styles.navigation_button} onClick={toggleNav}></div>
      </nav>
    </>
  );
}