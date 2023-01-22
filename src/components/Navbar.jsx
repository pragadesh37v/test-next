import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './styles/navbar.module.css'

function Navbar() {

    const router = useRouter()

  return (
    <div>
        <Link href="/" className={router.pathname === "/" ? styles.active : ""}>Home</Link>
        <Link href="/custom/one" className={router.pathname === "/custom/one" ? styles.active : ""}>custome page</Link>
    </div>
  )
}

export default Navbar