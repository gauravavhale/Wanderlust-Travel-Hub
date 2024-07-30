import React from 'react'
import styles from './places.css'
import { Nav } from '@/components/Nav'
import Image from 'next/image'
import Maldives from '../../../public/Image/maldives.jpg'
import Bali from '../../../public/Image/bali.jpg'
import Dubai from '../../../public/Image/dubai.jpg'
import Laddakh from '../../../public/Image/laddakh.jpg'
import Italy from '../../../public/Image/italy.jpg'
import Paris from '../../../public/Image/paris.jpg'
import { Footer } from '@/components/Footer'

const Places = () => {
  return (
    
    <div className="places" id="places" >
    <Nav />
      <h1 className="the-heading">Places to Visit</h1>
      <p className="the-text"> Uncover hidden gems with us, Where adventures become reality. Your dream getaway starts here. </p>
      <div className="places-gallery">
        <Image src= {Maldives} alt="Maldives"/>
        <Image src= {Bali} alt="Bali"/>
        <Image src= {Dubai} alt="Dubai"/>
        <Image src= {Laddakh} alt="Laddakh"/>
        <Image src= {Italy} alt="Italy"/>
        <Image src= {Paris} alt="Paris"/>
      </div>
      <Footer />
    </div>
  )
}

export default Places