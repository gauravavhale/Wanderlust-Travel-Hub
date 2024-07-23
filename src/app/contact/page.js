import { Footer } from '@/components/Footer';
import { Nav } from '@/components/Nav';
import React from 'react'
import styles from "./contact.css"

const Contact = () => {
  return (
    <div>
      <Nav />
      <section className='contact'>
        <div className='form'>
              <h1>Contact Us</h1>
              <div className='formdata'>
              <input className=' bi bi-person' placeholder='Name' type='text'/>
              <input placeholder='Email' type='text'/>
              <textarea placeholder='Message'/>
              <button className='btn'>Send Message</button>
              </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Contact;
