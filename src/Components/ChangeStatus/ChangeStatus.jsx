import "./ChangeStatus.css";

import React from 'react'

const ChangeStatus = () => {
  return (
    <div className="overlay">
      <div className="status-container">
          <form action="">
            <input type="radio" name="status" id="1option" />
            <label htmlFor="1option">Read</label>
            <input type="radio" name="status" id="2option" />
            <label htmlFor="2option">Currently Reading</label>
            <input type="radio" name="status" id="3option" />
            <label htmlFor="3option">Want To Read</label>
             <br/>
            <div className="change-btn-container">
              <button className="change-btn" type="submit">Confirm</button>
              <button className="change-btn" type="button" >Cancel</button>
              </div>
            </form>
      </div>
    </div>
  )
}

export default ChangeStatus