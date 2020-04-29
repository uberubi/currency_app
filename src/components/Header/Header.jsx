import React from 'react'
import styles from './Header.module.css'
import Navbar from '../Navbar/Navbar'

const Header = props => {
  return (
    <header className={styles.header}>
      <div className="">
        <Navbar />
      </div>
    </header>
    
  )
}

export default Header