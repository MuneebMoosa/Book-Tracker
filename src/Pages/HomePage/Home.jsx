
import "./Home.css"
import { useState } from 'react';
import { IoIosArrowDown , IoIosArrowUp } from "react-icons/io";

const Home = () => {

   const [showAddForm, setShowAddForm] = useState(false);

  return (
    <div className="main-container">
      <nav className='nav-space'>
        <h1 className='nav-head'>Book Tracker</h1>
      </nav>
      <div className="field-container">
          <button className="home-btn first-btn"
          onClick={() => setShowAddForm(!showAddForm)}
          >
             Add a new book
            <span>
              {showAddForm ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </span>
          </button>

          {showAddForm && (
          <div className="add-container">
              <form action="">
                  <label htmlFor='title'>Book Title</label>
                  <br />
                  <input className='input-box 'id='title' type="text" />

                  <br />

                  <label  htmlFor='author'>Author</label>
                  <br />
                  <input  className='input-box' id='author' type="text" />

                  <br />

                  <label >Status</label>
                  <br />
                  <input className='input-radio' type="radio" name="status" id="option1" />
                  <label htmlFor="option1">Read</label>

                  <input className='input-radio' type="radio" name="status" id="option2" />
                  <label htmlFor="option2">Currently Reading</label>

                  <input  className='input-radio' type="radio" name="status" id="option3" />
                  <label htmlFor="option3">Want To Read</label>
                  
                  <br />

                  <button className="third-btn" type="submit">
                    Add Book
                  </button>
              </form>
          </div>
        )}
          <button  className="home-btn second-btn">
                My Library
          </button>
      </div>
    </div>

  )
}

export default Home