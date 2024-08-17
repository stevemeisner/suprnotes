'use client'

import Link from 'next/link'
import { useState } from 'react'
import styles from './Navigation.module.scss'

export default function Navigation() {
  const [user, setUser] = useState(null)

  return (
    <nav className={styles.primary}>
      <ul>
        {user ? (
          <>
            <li>
              <Link href="/notes">My Notes</Link>
            </li>
            <li>
              <Link href="/notes/new">New Note</Link>
            </li>
          </>
        ) : (
          <li>
            <Link href="/login">Login</Link>
          </li>
        )}
      </ul>
    </nav>
  )
}
