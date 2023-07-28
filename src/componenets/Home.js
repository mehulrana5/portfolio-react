import React, { useContext, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './css/home.css';
import mycontext from '../MyContext';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const context = useContext(mycontext);

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const targetIndex = Array.from(document.querySelectorAll('.pages')).indexOf(entry.target);
        const opts = document.querySelectorAll('.nav > ul > li');
        opts.forEach((opt) => opt.classList.remove('nav-active'));
        if (opts[targetIndex]) {
          opts[targetIndex].classList.add('nav-active');
        }
      }
    });
  };
  useEffect(() => {
    gsap.to('.background', {
      y: '-8%',
      ease: 'none',
      scrollTrigger: {
        trigger: 'body',
        start: '400px center',
        end: '2000px center',
        scrub: 1,
      },
    });
    console.log("navBtn:"+context.navBtn);
    if(!context.navBtn){
      const observer = new IntersectionObserver(handleIntersection, {
        root: null,
        threshold: 0.5,
      });
      const containers = document.querySelectorAll('.pages');
      containers.forEach((container) => {
        observer.observe(container);
      });
      return () => observer.disconnect();
    }
    setTimeout(() => {
      context.setNavBtn(0);
    }, 1000);

  }, [context.navBtn]);
  return (
    <>
      <div className="home-page pages">
        <div className="img1"></div>
        <div className="home-container">
          Hi, i am <span className="my-name">Mehul.</span>
          <br />
          <span>
            I <i>design</i> and develop
          </span>
        </div>
      </div>
    </>
  );
}
