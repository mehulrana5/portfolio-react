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
    const btns = document.querySelectorAll(".wrap-container button")
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
            <button onClick={() => open(0)} className="btn active">Skills</button>
            <button onClick={() => open(1)} className="btn">Resume</button>

            <div className="about-container skills open">
              <div className="skill-container dev">
                <div className="skill-container-title">Development</div>
                <div className="dev-item-container">
                  <div className="dev-item">HTML</div>
                  <div className="dev-item">Python</div>
                  <div className="dev-item">Js</div>
                  <div className="dev-item">C++</div>
                  <div className="dev-item">C</div>
                  <div className="dev-item">MySql</div>
                  <div className="dev-item">MongoDb</div>
                  <div className="dev-item">Reactjs</div>
                  <div className="dev-item">Express</div>
                  <div className="dev-item">NodeJs</div>
                  <div className="dev-item">Css </div>
                  <div className="dev-item">UI/UX</div>
                  <div className="dev-item">Backend</div>
                </div>
              </div>
              <div className="skill-container plat">
                <div className="skill-container-title">Platforms</div>
                <ul className="plat-items">
                  <li className="plat-item"><a href="https://leetcode.com/mehul101/" target='_blank' rel='noreferrer'>Leetcode</a></li>
                  <li className="plat-item"><a href="https://www.cloudskillsboost.google/public_profiles/a4d845ab-ec5d-46df-a554-e86cf9d08b05" target='_blank' rel='noreferrer'>Google Cloud</a></li>
                  <li className="plat-item"><a href='https://github.com/mehulrana5' target='_blank' rel='noreferrer'>Github</a></li>
                  <li className="plat-item"><a href='https://www.linkedin.com/in/mehul-rana-463aa0227/' target='_blank' rel='noreferrer'>LinkedIn</a></li>
                </ul>
              </div>
            </div>
            <div className="about-container resume">
              <a href={resume} rel="noreferrer" target='_blank'>
                <div className="resume-img-mask"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
