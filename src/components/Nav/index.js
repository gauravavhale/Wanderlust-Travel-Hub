import React from 'react'
import styles from './nav.css'

export const Nav = () => {
  return (
    <nav className="main-navbar">
          <a href="/landing">Home</a>
          <a href="/places">Places</a>
          <a href="/gallery">Gallery</a>
          <a href="/packages">Packages</a>
          <a href="/contact">Contact</a>
     </nav>
  )
}