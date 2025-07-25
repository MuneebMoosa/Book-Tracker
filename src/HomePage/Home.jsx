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

          <div className="add-container">
              <form action="">
                  <label htmlFor='title'>Book Title</label>
                  <br />
                  <input id='title' type="text" />

                  <br />

                  <label  htmlFor='author'>Author</label>
                  <br />
                  <input  id='author' type="text" />

                  <br />

                  <label >Status</label>
                  <br />
                  <input type="radio" name="status" id="option1" />
                  <label htmlFor="option1">Read</label>

                  <input type="radio" name="status" id="option2" />
                  <label htmlFor="option2">Currently Reading</label>

                  <input type="radio" name="status" id="option3" />
                  <label htmlFor="option3">want To Read</label>
               
              </form>
          </div>

          <button  className="home-btn second-btn">
                My Library
          </button>
      </div>
    </div>

  )
}

export default Home