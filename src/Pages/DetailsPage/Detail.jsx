import Navigation from '../../Components/Navigation/Navigation'
import ChangeStatus from '../../Components/ChangeStatus/ChangeStatus'
import './Detail.css'
import { useNavigate ,useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
const Detail = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState([]);
  const [showChangeStatus ,setShowChangeStatus] = useState(false);
  // for retrieving book from localstorage
  useEffect(() => {
      const books = JSON.parse(localStorage.getItem('books')) || [];
      const foundbook = books.find(book => book.id === id);
      setBook(foundbook);
  }, [id]);
// poda patti
  // handle delete
  const handleDelete = () => {
    const books = JSON.parse(localStorage.getItem('books')) || [];
    const UpdatedBooks = books.filter(b => b.id !== id);
    localStorage.setItem('books' , JSON.stringify(UpdatedBooks));
    navigate('/library');
  };

 const handleStatusChange = (newStatus) => {
    const books = JSON.parse(localStorage.getItem('books')) || [];
    const updatedBooks = books.map((b) =>
      b.id === id ? { ...b, status: newStatus } : b
    );
    localStorage.setItem('books', JSON.stringify(updatedBooks));
    const updatedBook = updatedBooks.find((b) => b.id === id);
    setBook(updatedBook); 
    setShowChangeStatus(false);
  };
  return (
    <div className='details-container'>
      <Navigation/>
          <div className="details-main">
            <div className="spec-container">
              <img  className="book-image"src="src/assets/images/Bookimage.jpeg" alt="Book image" />
                <h2  className="book-title-details">{book.title}</h2>
                <p  className="book-autho-details">by {book.author}</p>
                <p className='status-details'>Status : {book.status}</p>
                <button className='change-status-details' onClick={() => setShowChangeStatus(true)}>Change Status</button>
                <button className='change-status-details' onClick={handleDelete}>Delete</button>
            </div>
            <div className="thoughts-container">
                    {/* all need to change just rough */}
                      <div className="book-notes">
                        <h2>Your Notes</h2>
                        <div className="notes-list">
                          {/* Example: Replace with dynamic notes later */}
                          <div className="note-box">This is a saved note.</div>
                          <div className="note-box">Another saved note here.</div>
                        </div>
                        <div className="note-input-area">
                            {/* <textarea className='textarea'
                              placeholder="Write your thoughts, summary, or anything..."
                            ></textarea> */}
                            <button>Add Note</button>
                        </div>
                      </div>
              </div>
          </div>
         {showChangeStatus && (
          <ChangeStatus
            onConfirm={handleStatusChange}
            onCancel={() => setShowChangeStatus(false)}
          />
        )}
    </div>
  )
}

export default Detail