import React from 'react'
import styles from './gallery.css'
import Image from 'next/image'
import Maldives from '../../../public/Image/maldives.jpg'
import Bali from '../../../public/Image/bali.jpg'
import Dubai from '../../../public/Image/dubai.jpg'
import Laddakh from '../../../public/Image/laddakh.jpg'
import Italy from '../../../public/Image/italy.jpg'
import Paris from '../../../public/Image/paris.jpg'

export const Gallery = () => {

    const data = [
        {
            ImageUrl : Maldives
        },
        {
            ImageUrl : Bali
        },
        {
            ImageUrl : Dubai
        },
        {
            ImageUrl : Laddakh
        },
        {
            ImageUrl : Italy
        },
        {
            ImageUrl : Paris
        }
    ]

  return (
        <section className="gallery" id="gallery">
        <h1 className="the-heading">Tours Gallery</h1>
        <p  className="the-text "> Escape the ordinary and dive into extraordinary experiences at our handpicked travel hotspots. <br></br>
                                   Unleash your inner explorer and set sail towards breathtaking landscapes and thrilling escapades with our exclusive travel itineraries.</p>
        <div className="gallery-wrapper">
    
          {
            data.map((obj,i)=>{
                return(
                <div className="zoom" key={i}>
                <Image  
                src={obj.ImageUrl}
                alt="" 
                />
                </div>
                )
            })
          }
          </div>
          </section>
  )
}