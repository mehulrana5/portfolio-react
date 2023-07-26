import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './css/home.css';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    var isTabletScreen = window.innerWidth > 700;
    // Conditionally create the scroll trigger
    if (isTabletScreen) {
      gsap.to('.background', {
        y: '-8%', // Adjust this value to control the parallax effect
        ease: 'none',
        scrollTrigger: {
          trigger: 'body',
          start: '400px center',
          end: '2000px center',
          scrub: 1,
        },
      });
    }
  }, []);
  return ( 
    <>
      <div className="home-page">
        <div className="img1">
        </div>
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
