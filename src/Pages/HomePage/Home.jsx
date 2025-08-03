
import "./Home.css"
import { useState } from 'react';
import { IoIosArrowDown , IoIosArrowUp } from "react-icons/io";

const Home = () => {
  // value rendering part
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [status, setStatus] = useState("");
  // the form up and down part
  const [showAddForm, setShowAddForm] = useState(false);

  const handleAddBook = (e) => {
    e.preventDefault();

    if(!title || !author || !status){
      alert("please fill in the input fully");
      return;
    }

    const newBook = {
      id:Date.now().toString(),
      title,
      author,
      status,
      //  under part add from anoher place
      image: "",
      description: "",
      notes: []
    };

    const existing = JSON.parse(localStorage.getItem("books")) || [];
    localStorage.setItem("books" , JSON.stringify([...existing, newBook]));
    
    setTitle("");
    setAuthor("");
    setStatus("");
    setShowAddForm(false);
    
    alert("Book added!")
  }

  

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
              <form onSubmit={handleAddBook}>
                  <label htmlFor='title'>Book Title</label>
                  <br />
                  <input className='input-box 'id='title' type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>

                  <br />

                  <label  htmlFor='author'>Author</label>
                  <br />
                  <input  className='input-box' id='author' type="text" value={author} onChange={(e) => setAuthor(e.target.value)}/>

                  <br />

                  <label >Status</label>
                  <br />
                  <input className='input-radio' type="radio" name="status" id="option1"
                  value="Read" 
                  checked={status === "Read"}
                  onChange={(e) => setStatus(e.target.value)}/>
                  <label htmlFor="option1">Read</label>

                  <input className='input-radio' type="radio" name="status" id="option2" 
                  value="Currently Reading"
                  checked={status === "Currently Reading"}
                  onChange={(e) =>  setStatus(e.target.value)}/>
                  <label htmlFor="option2">Currently Reading</label>

                  <input  className='input-radio' type="radio" name="status" id="option3"
                  value="Want To Read"
                  checked={status === "Want To Read"}
                  onChange={(e) =>  setStatus(e.target.value)}/>
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