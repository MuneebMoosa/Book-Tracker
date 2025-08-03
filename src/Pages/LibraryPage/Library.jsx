import Navigation from '../../Components/Navigation/Navigation'
import Card from '../../Components/Cards/Card'
import "./Library.css"
import { useEffect } from 'react'

const Library = () => {

  const [books, setBooks] = useState([]);
  const [filterStatus, setFilterStatus] = useState("All");

  useEffect(() => {
        const storedBooks = JSON.parse(localStorage.getItem("books")) || [];
        setBooks(storedBooks);
  }, [])

  const deleteBook = (id) => {
     const updatedBooks = books.filter(book => book.id !== id);
     localStorage.setItem("books", JSON.stringify(updatedBooks));
     setBooks(updatedBooks);
  }

  const changeStatus = (id) => {
     const newStatus = prompt("Enter new status (Wishlist / Reading / Completed)");
     
  }

  return (
    <div className='library-container'>
      <Navigation/>
      <div className="library-main">
        <h1 className='library-head'>My Library</h1>
        <div className="filter-btn-main">
          <button className='filter-btn'>All</button>
          <button className='filter-btn'>Wishlist</button>
          <button className='filter-btn'>Reading</button>
          <button className='filter-btn'>Completed</button>
        </div>
      </div>

      <div className="card-container">
         




      </div>


    </div>
  )
}

export default Library