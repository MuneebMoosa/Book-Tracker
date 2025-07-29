import React from 'react'
import './Card.css' 
const Card = ({bgColor}) => {
  return (
    <div className="card" style={{ backgroundColor: bgColor }}>
          <h2  className="book-title">The Great Gatsby</h2>
          <p  className="book-author">by F. Scott Fitzgerald</p>
          <div className="status">Reading</div>
        
              <div className="card-footer">
                  <div className="manipulate">
                    <button className="change-status">Change Status</button>
                    <button className="delete-status">Delete</button>
                  </div>
              </div>
        </div>
  )
}

export default Card