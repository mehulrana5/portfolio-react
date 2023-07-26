import React from 'react'
import "./css/project.css"

export default function Project() {
  return (
    <div>
      <div className="show-case">
        <div className="card-container">
          <div className="card">
            <div className="proj-img">
              <div className="proj-img-container p1"></div>
            </div>
            <div className="proj-title">
              Cognise App
            </div>
            <div className="proj-tags">
                <div className="tag">Reactjs</div>
                <div className="tag">MongoDb</div>
                <div className="tag">Chat Gpt</div>
            </div>
            <div className="proj-descp">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati asperiores ratione corrupti veritatis placeat. Esse odio cumque, officiis sequi aspernatur fugit beatae fuga? Impedit asperiores quae aliquid optio tempore nulla!
            </div>
            <button className="card-btn">
              view project
            </button>
          </div>
          <div className="card">
            <div className="proj-img">
              <div className="proj-img-container p1"></div>
            </div>
            <div className="proj-title">
              Cognise App
            </div>
            <div className="proj-tags">
                <div className="tag">Reactjs</div>
                <div className="tag">MongoDb</div>
                <div className="tag">Chat Gpt</div>
            </div>
            <div className="proj-descp">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati asperiores ratione corrupti veritatis placeat. Esse odio cumque, officiis sequi aspernatur fugit beatae fuga? Impedit asperiores quae aliquid optio tempore nulla!
            </div>
            <button className="card-btn">
              view project
            </button>
          </div> 
        </div>
        <h3 className='show-case-footer'>
          Check out more projects on my 
          <a href="https://github.com/mehulrana5" o-target-blank='_blank'>Github</a>
        </h3>
      </div>
    </div>
  )
}
