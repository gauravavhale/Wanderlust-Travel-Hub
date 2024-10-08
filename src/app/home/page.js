import React from 'react'
import styles from './home.css'
import { Nav } from '@/components/Nav'
import { Header } from '@/components/Header';


const Home = () => {
  return (
    <>
    <Header />
    <Nav />
    <div className="holidays">
      <h1 className="the-head">Enjoy the Holidays</h1>
      <p className="the-tex">Book a ticket and just leave. Lets turn your wanderlust into reality!</p>
      <p className="the-tex">Explore the world with us, What do you think ?</p>
      <p className="the-tex">Book with us and book it out of here!</p>
      <div> <a href="/places" className="btn">Book Now</a></div>
    </div>
    </>
  )
}

export default Home