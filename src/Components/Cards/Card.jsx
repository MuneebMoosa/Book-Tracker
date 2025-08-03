import React from 'react'
import './Card.css' 
const Card = ({ id, title, author, status, bgColor, onDelete, onChangeStatus }) => {
  return (
    <div className="card" style={{ backgroundColor: bgColor }}>
          <h2  className="book-title">{title}</h2>
          <p  className="book-author">by {author}</p>
          <div className="status">{status}</div>
        
              <div className="card-footer">
                  <div className="manipulate">
                    <button className="change-status" onClick={() => onChangeStatus(id)}>Change Status</button>
                    <button className="delete-status" onClick={() => onDelete(id)}>Delete</button>
                  </div>
              </div>
        </div>
  )
}

export default Card