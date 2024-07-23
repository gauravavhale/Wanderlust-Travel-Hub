import React from 'react'
import styles from './card.css'
import Image from 'next/image'
import Maldives from '../../../public/Image/maldives.jpg'
import Bali from '../../../public/Image/bali.jpg'
import Dubai from '../../../public/Image/dubai.jpg'
import Laddakh from '../../../public/Image/laddakh.jpg'
import Italy from '../../../public/Image/italy.jpg'
import Paris from '../../../public/Image/paris.jpg'
import Sydney from '../../../public/Image/Sydney.jpg'
import SriLanka from '../../../public/Image/SriLanka.jpg'


export const Card = () => {



  const loc = [
    {
      imageUrl : Maldives,
      heading : "Maldives",
      info : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam accusantium vel qui deleniti fugit placeat.",
      price : "50,000",
      alt : "Maldives"
    },
    {
      imageUrl : Bali,
      heading : "Bali",
      info : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam accusantium vel qui deleniti fugit placeat.",
      price : "35,000",
      alt : "Bali"
    },
    {
      imageUrl : Dubai,
      heading : "Dubai",
      info : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam accusantium vel qui deleniti fugit placeat.",
      price : "1,00,000",
      alt : "Dubai"
    },
    {
      imageUrl : Laddakh,
      heading : "Laddakh",
      info : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam accusantium vel qui deleniti fugit placeat.",
      price : "40,000",
      alt : "Laddakh"
    },
    {
      imageUrl : Italy,
      heading : "Italy",
      info : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam accusantium vel qui deleniti fugit placeat.",
      price : "1,30,000",
      alt : "Italy"
    },
    {
      imageUrl : Paris,
      heading : "Paris",
      info : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam accusantium vel qui deleniti fugit placeat.",
      price : "2,35,000",
      alt : "Paris"
    },
    {
      imageUrl : Sydney,
      heading : "Sydney",
      info : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam accusantium vel qui deleniti fugit placeat.",
      price : "1,20,000",
      alt : "Sydney"
    },
    {
      imageUrl : SriLanka,
      heading : "SriLanka",
      info : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam accusantium vel qui deleniti fugit placeat.",
      price : "80,000",
      alt : "SriLanka"
    }
  ]

  return (
    <div className="Packages" id="packages">
    <h1 className="the-heading">Our Packages</h1>
    <p className="the-text ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus ratione, praesentium ducimus corporis voluptatibus reprehenderit.</p>
    <div className="package-wrapper">
      {
        loc.map((props,i)=>{
          return (
            <div key={"div_"+i} className="package-card" alt="Maldives">
            <Image src={props.imageUrl} alt={props.alt}/>
            <div className="package-card-body">
            <h3>{props.heading}</h3>
            <p>{props.info}</p>
            <h5>&#8377; {props.price}</h5>
            <button className="btn">Book Now</button>
            </div>
            </div>
          )
        })
      }
    </div>
    </div>
  )
}


// <div className="package-card">
//<img src="Images1/bali.jpg" alt=""/>
//<div className="package-card-body">
//<h3>Bali</h3>

//<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam accusantium vel qui deleniti fugit placeat.</p>
//<h5>&#8377;35,000</h5>
//<button className="btn">Book Now</button>
//</div>
//</div>
