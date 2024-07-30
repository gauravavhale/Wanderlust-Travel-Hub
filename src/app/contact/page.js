"use client"
import { Footer } from '@/components/Footer';
import { Nav } from '@/components/Nav';
import React from 'react'
import styles from "./contact.css"

const Contact = () => {
    

  const fnContact =()=>{
    document.querySelector("#name").value = ''
    document.querySelector("#email").value = ''
    document.querySelector("#message").value = ''
  }

  return (
    <div>
      <Nav />
      <section className='contact'>
        <div className='form'>
              <h1>Contact Us</h1>
              <div className='formdata'>
              <input id='name' placeholder='Name' type='text'/>
              <input id='email' placeholder='Email' type='email'/>
              <input id='message' placeholder='Message' type='text'/>
              <button onClick={fnContact} className='btn'>Send Message</button>
              </div>
        </div>
      </section>
      <Footer />
    </div>
  ) 
}

export default Contact;
