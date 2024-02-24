import React from 'react'
import "./css/project.css"
import noImg from './img/no-img.jpg'
import proj1_img from './img/proj1-img1.png'
import proj1_img_1 from './img/cognize_project_mockup_1.svg'

export default function Project() {
  return (
    <div className="show-case pages">
      <div className="card-container">
        <div className="card-container-scroller">
          <div className="card">
            <div className="proj-img">
              <img className='proj-img-container' src={proj1_img_1} alt={noImg} srcset="" />
            </div>
            <div className="content">
              <div className="proj-title">
                Cognise
              </div>
              <div className="proj-descp">
                "Cognize" is a web-based React app that helps users improve their cognitive skills. It offers a variety of articles for reading and comprehension exercises, accompanied by timed quizzes. Additionally, the app keeps you updated with the latest news articles and generates thought-provoking questions. You can track your progress and enjoy a range of engaging features for personalized cognitive development.
              </div>
              <div className="proj-tags">
                <div className="tag">Reactjs</div>
                <div className="tag">MongoDb</div>
                <div className="tag">Chat Gpt</div>
              </div>
              <a className="card-btn" href="https://mehulrana5.github.io/cognise/" rel="noreferrer" target='_blank'>view project</a>
            </div>
          </div>
        </div>
        <div className="card-container-scroller">
          <div className="card">
            <div className="proj-img">
              <img className='proj-img-container' src={noImg} alt="" srcset="" />
            </div>
            <div className="content">
              <div className="proj-title">
                [Project name]
              </div>
              <div className="proj-descp">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati asperiores ratione corrupti veritatis placeat. Esse odio cumque, officiis sequi aspernatur fugit beatae fuga? Impedit asperiores quae aliquid optio tempore nulla!
              </div>
              <div className="proj-tags">
                <div className="tag">[Project tags]</div>
                <div className="tag">[Project tags]</div>
                <div className="tag">[Project tags]</div>
              </div>
              <button className="card-btn">
                view project
              </button>
            </div>
          </div>
        </div>
      </div>
      <h3 className='show-case-footer'>
        Check out more projects on my
        <a href="https://github.com/mehulrana5" rel="noreferrer" target='_blank'>Github</a>
      </h3>
    </div>
  )
}
