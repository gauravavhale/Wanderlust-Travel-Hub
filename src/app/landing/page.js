import React from 'react'
import styles from './landing.css'

const Landing = () => {
  return (
    <div className="landing" id="landing">
         <div className="wrapper">
           <div className="wrapper-content">
                <h1 className="landing-heading">Wanderlust Travel Hub</h1>
               <div> <a href="/home" className="btn">Book Now</a>
            </div>
           </div>
         </div>
    </div>
  )
}

export default Landing