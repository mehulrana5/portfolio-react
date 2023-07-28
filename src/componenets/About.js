import React from 'react';
import './css/about.css';
import { useEffect } from 'react';
import Lottie from "lottie-react";
import animationData from "./animations/about-ani1.json"
import resume from "../resume.pdf"

export default function About() {
  useEffect(() => {
    const isMobileScreen = window.innerWidth <= 700;
    if (!isMobileScreen) {

    }
  }, []);
  function open(e) {
    const btns = document.querySelectorAll(".about-me button")
    const cons = document.querySelectorAll(".about-container")
    btns.forEach(btn => {
      btn.classList.remove('active')
    });
    btns[e].classList.add('active')
    cons.forEach(con => {
      con.classList.remove('open')
    });
    cons[e].classList.add('open')
  }
  return (
    <div>
      <div className="about-sec pages">
        <div className="intro">
          <Lottie animationData={animationData} className='ani-1' />
          <div className="wrap-container">
            <div className="about-me">
              <button onClick={() => open(0)} className="btn active">
                Skills
              </button>
              <button onClick={() => open(1)} className="btn">
                Resume
              </button>
            </div>
            <div className="about-container skills open">
              <h2>skills</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam asperiores, sint ea, reiciendis nulla molestiae nam quas corrupti est cupiditate vel fuga. Est quo in, adipisci praesentium quae quos totam.
              </p>
            </div>
            <div className="about-container resume">
                <a href={resume}  rel="noreferrer" target ='_blank'>
                  <div className="resume-img-mask"></div>
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
