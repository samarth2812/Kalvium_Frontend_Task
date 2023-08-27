import React from 'react'
import styles from '@/styles/Navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
    <div>
        <nav className={styles.mainnav}>
        <ul className={styles.hello}>
             <h2 className={styles.fo}>Hi 👋, Samarth</h2>
            </ul>
            <ul className={styles.hello}>
                 <Link className={styles.u} legacyBehavior href='/'><a className={styles.fer}><li>Home</li></a></Link>
                 <Link className={styles.u} legacyBehavior href='/'><a className={styles.fer}><li> </li>Subject-wise attendance</a></Link> 
                <Link className={styles.u} legacyBehavior href='/Project'><a className={styles.fer}><li>Timetable</li></a></Link>
                <Link className={styles.u} legacyBehavior href='/attendence'><a className={styles.fer}><li>Mark your attendance</li></a></Link> 
            </ul>

        </nav> 
      
    </div>
    </>
  )
}

export default Navbar