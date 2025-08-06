import Navigation from '../../Components/Navigation/Navigation'
import ChangeStatus from '../../Components/ChangeStatus/ChangeStatus'
import Card from '../../Components/Cards/Card'
import "./Library.css"
import { useEffect, useState } from 'react'

const Library = () => {

  const [books, setBooks] = useState([]);
  const [filterStatus, setFilterStatus] = useState("All");
  const [showModal, setShowModal] = useState(false); 
   const [selectedBookId, setSelectedBookId] = useState(null); 

  useEffect(() => {
        const storedBooks = JSON.parse(localStorage.getItem("books")) || [];
        setBooks(storedBooks);
  }, [])

  const deleteBook = (id) => {
     const updatedBooks = books.filter(book => book.id !== id);
     localStorage.setItem("books", JSON.stringify(updatedBooks));
     setBooks(updatedBooks);
  }

  const handleChangeStatusClick = (id) => {
    setSelectedBookId(id);
    setShowModal(true);
  };

  const handleStatusPopUp= (newStatus) => {
    const updatedBooks = books.map(book =>
      book.id === selectedBookId ? { ...book, status: newStatus } : book
    );
    localStorage.setItem("books", JSON.stringify(updatedBooks));
    setBooks(updatedBooks);
    setShowModal(false);
  };

  const filteredBooks = filterStatus === "All"
  ? books
  : books.filter(book => book.status === filterStatus);

  return (
    <div  className="library-container">
      <Navigation/>
      <div className="library-main">
        <h1 className='library-head'>My Library</h1>
        <div className="filter-btn-main">
          <button className='filter-btn' onClick={() => setFilterStatus("All")}>All</button>
          <button className='filter-btn'  onClick={() => setFilterStatus("Want To Read")}>Wishlist</button>
          <button className='filter-btn' onClick={() => setFilterStatus("Currently Reading")}>Reading</button>
          <button className='filter-btn'  onClick={() => setFilterStatus("Read")}>Completed</button>
        </div>
      </div>

        <div className="card-container">
           {filteredBooks.length === 0 ? (
              <h1 className="empty-library-message">OOPS! Nothing HERE :)</h1>
            ) : filteredBooks.map(book => (
            <Card
              key={book.id}
              id={book.id}
              title={book.title}
              author={book.author}
              status={book.status}
                bgColor={
                book.status === "Read"
                  ? "#c69dd8"
                  : book.status === "Currently Reading"
                  ? "#B6A4B0"
                  : "#F1EEF6"
              }
              onDelete={deleteBook}
              onChangeStatus={handleChangeStatusClick}
            />
          ))}
        </div>
      {showModal && (
        <ChangeStatus
          onConfirm={handleStatusPopUp}
          onCancel={() => setShowModal(false)}
        />
         )}
    </div>
  );
}

export default Library