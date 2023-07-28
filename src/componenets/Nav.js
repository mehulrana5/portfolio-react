import React, { useContext, useRef } from 'react';
import './css/nav.css';
import Home from './Home';
import Project from './Project';
import About from './About';
import Contact from './Contact';
import mycontext from '../MyContext';

export default function Nav() {
  const sectionsRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  
  const context=useContext(mycontext);

  function toggleMenu() {
    document.querySelector('.nav ul').classList.toggle('open');
    const lines = document.querySelectorAll('.lines');
    lines.forEach((line) => {
      line.classList.toggle('open');
    });
  }

  function GoTo(index) {
    toggleMenu();
    context.setNavBtn(1);
    if (sectionsRefs[index]?.current) {
      sectionsRefs[index].current.scrollIntoView({ behavior: 'smooth' });
      const opts=document.querySelectorAll('.nav>ul>li')
      opts.forEach(opt => {
        opt.classList.remove('nav-active')
      });
      opts[index].classList.add('nav-active')
    }
  }

  return (
    <>
      <div className="ghost-nav"></div>
      <div className="nav">
        <ul>
          <li onClick={() => GoTo(0)} className='nav-active'> 
            Home
          </li>
          <li onClick={() => GoTo(1)}> 
            About
          </li>
          <li onClick={() => GoTo(2)}> 
            Projects
          </li>
          <li onClick={() => GoTo(3)}> 
            Contacts
          </li>
        </ul>
        <div className="burger" onClick={toggleMenu}>
          <div className="lines l1"></div>
          <div className="lines l2"></div>
          <div className="lines l3"></div>
        </div>
      </div>
      <div className="entire-bg">
        <div ref={sectionsRefs[0]}>
          <Home/>
        </div>
        <div ref={sectionsRefs[1]}>
          <About/>
        </div>
        <div ref={sectionsRefs[2]}>
          <Project/>
        </div>
        <div ref={sectionsRefs[3]}>
          <Contact/>
        </div>
      </div>
    </>
  );
}
