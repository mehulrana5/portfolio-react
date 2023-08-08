import React from 'react'
import "./css/project.css"
import noImg from './img/no-img.jpg'
import proj1_img from './img/proj1-img1.png'

export default function Project() {
  return (
    <div className="show-case pages">
      <div className="card-container">
        <div className="card-container-scroller">
          <div className="card">
            <div className="proj-img">
              <img className='proj-img-container' src={proj1_img} alt={noImg} srcset="" />
            </div>
            <div className="content">
              <div className="proj-title">
                Cognise
              </div>
              <div className="proj-descp">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati asperiores ratione corrupti veritatis placeat. Esse odio cumque, officiis sequi aspernatur fugit beatae fuga? Impedit asperiores quae aliquid optio tempore nulla!
              </div>
              <div className="proj-tags">
                <div className="tag">Reactjs</div>
                <div className="tag">MongoDb</div>
                <div className="tag">Chat Gpt</div>
              </div>
              <button className="card-btn">
                view project
              </button>
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
