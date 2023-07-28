import React from 'react'
import './css/contact.css'

export default function Contact() {
  return (
    <div className='contact-sec pages'>
      <div className="contact-container">
        <form action="" className='contact-form'>
          <input type="text" name="uname" id=""  placeholder='Name'/>
          <input type="email" name="uemail" id=""  placeholder='Email'/>
          <textarea name="message" id="" cols="70" rows="10" placeholder='Message'></textarea>
          <input type="submit" value="Submit" className='contact-btn'/>
          <div className="social-ids">

          </div>
        </form>
      </div>
      <div className="contact-img-container">
        <div className="contact-img"></div>
      </div>
    </div>
  )
}
