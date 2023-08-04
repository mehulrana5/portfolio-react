import React from 'react'
import './css/contact.css'
import icon1 from './img/linkedin-icon.svg'
import icon2 from './img/github-icon.svg'
import icon3 from './img/gmail-icon.svg'


export default function Contact() {
  return (
    <div className='contact-sec pages'>
      <h2>Contacts</h2>
      <div className='con-desc'>
        Feel free to connect with me through any of these platforms
      </div>
      <div className="contact-icons">
        <ul>
          <li>
            <a href='https://www.linkedin.com/in/mehul-rana-463aa0227/' target='_blank' rel='noreferrer'>
              <img src={icon1} alt="" srcset="" />
            </a>
          </li>
          <li>
            <a href='https://github.com/mehulrana5' target='_blank' rel='noreferrer'>
              <img src={icon2} alt="" srcset="" />
            </a>
          </li>
          <li>
            <a href='mailto:mehulwork92@gmail.com'>
              <img src={icon3} alt="" srcset="" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
