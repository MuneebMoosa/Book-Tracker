import Navigation from '../../Components/Navigation/Navigation'
import './Detail.css'
const Detail = () => {
  return (
    <div className='details-container'>
      <Navigation/>
          <div className="details-main">
            <div className="spec-container">
              <img  className="book-image"src="src/assets/images/Bookimage.jpeg" alt="Book image" />
                <h2  className="book-title-details">The Great Gatsby</h2>
                <p  className="book-autho-details">by F. Scott Fitzgerald</p>
                <p className='status-details'>Status : Reading</p>
                <button className='change-status-details'>Change Status</button>
                <button className='change-status-details'>Delete</button>
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
      <div >

      </div>
    </div>
  )
}

export default Detail