import { FaPencilAlt } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import Navigation from '../../Components/Navigation/Navigation'
import ChangeStatus from '../../Components/ChangeStatus/ChangeStatus'
import './Detail.css'
import { useNavigate ,useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
const Detail = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const [showChangeStatus ,setShowChangeStatus] = useState(false);
  const [newNote, setNewNote] = useState('');
  const [showTextArea, setShowTextArea] = useState(false);
  // for retrieving book from localstorage
  useEffect(() => {
      const books = JSON.parse(localStorage.getItem('books')) || [];
      const foundbook = books.find(book => book.id === id);
        if (foundbook) {
        // ✅ Always make sure notes exists as an array
        setBook({ ...foundbook, notes: foundbook.notes || [] });
      }
  }, [id]);
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

  // notes part start
   // Add note
  const handleAddNote = () => {
    if (!newNote.trim()) return;

    const books = JSON.parse(localStorage.getItem('books')) || [];
    const updatedBooks = books.map(b =>
      b.id === id ? { ...b, notes: [...b.notes, newNote] } : b
    );
    localStorage.setItem('books', JSON.stringify(updatedBooks));

    setBook(prev => ({ ...prev, notes: [...prev.notes, newNote] }));
    setNewNote('');
  };

  // Delete note
  const handleDeleteNote = (noteIndex) => {
    const books = JSON.parse(localStorage.getItem('books')) || [];
    const updatedBooks = books.map(b =>
      b.id === id
        ? { ...b, notes: b.notes.filter((_, i) => i !== noteIndex) }
        : b
    );
    localStorage.setItem('books', JSON.stringify(updatedBooks));

    setBook(prev => ({
      ...prev,
      notes: prev.notes.filter((_, i) => i !== noteIndex)
    }));
  };
  // notes part end

  if (!book) {
    return (
      <div className="details-container">
        <Navigation />
        <p style={{ padding: '2rem' }}>Book not found or loading...</p>
      </div>
    );
  }
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
            <div className="book-notes">
              <h2>Your Notes</h2>
              <div className="notes-list">
                {book.notes.length > 0 ? (
                  book.notes.map((note, index) => (
                    <div key={index} className="note-box">
                      {note}
                      <MdOutlineDeleteOutline className="del-icon" onClick={() => handleDeleteNote(index)}/>
                    </div>
                  ))
                ) : (
                  <p>No notes yet !!!</p>
                )}
              </div>
              <div className="note-input-area">
                {!showTextArea &&( 
                <button className="add-note-btn" onClick={() => setShowTextArea(true)}> <FaPencilAlt /> Add Note</button>
                )}
                {showTextArea && (
                <>
                  <textarea
                    className='textarea'
                    placeholder="Write your thoughts..."
                    value={newNote}
                    onChange={(e) => setNewNote(e.target.value)}
                  ></textarea>
                  <div className="text-area-btns-container">
                    <button className="text-area-btns" onClick={() => {handleAddNote(); setShowTextArea(false)}}>Add</button>
                    <button className="text-area-btns" onClick={() => {setShowTextArea(false);setNewNote('');}}>Cancel</button>
                  </div>
                </>
                )} 
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