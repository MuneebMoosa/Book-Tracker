import React from 'react'
import "./Home.css"
const Home = () => {
  return (
    <div className="main-container">
      <nav className='nav-space'>
        <h1 className='nav-head'>Book Tracker</h1>
      </nav>
      <div className="field-container">
          <button className="home-btn first-btn">
            Add a new book 
          </button>
          <button  className="home-btn second-btn">
                My Library
          </button>
      </div>
    </div>

  )
}

export default Home