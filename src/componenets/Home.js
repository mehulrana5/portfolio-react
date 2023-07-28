import React, { useContext, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './css/home.css';
import mycontext from '../MyContext';
import Lottie from "lottie-react";
import animationData from "./animations/down-arrow-ani2.json"

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const context = useContext(mycontext);
  const [key, setKey] = useState(0);

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
    // Smooth scroll snapping using gsap
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

    // Event listener for the down arrow key
    const downArrowHandler = (event) => {
      if (event.key === 'ArrowDown') {
        setKey(1);
      }
    };

    if (!key) {
      window.addEventListener('keydown', downArrowHandler);
    }

    // Cleanup for event listener
    return () => {
      window.removeEventListener('keydown', downArrowHandler);
    };
  }, [key]);

  useEffect(() => {
    if (!context.navBtn) {
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
    // eslint-disable-next-line
  }, [context.navBtn]);

  return (
    <>
      <div className="home-page pages">
        <div className="up-down-key">
          Press key
          <Lottie loop={!key} animationData={animationData} className='ani-2' />
        </div>
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
