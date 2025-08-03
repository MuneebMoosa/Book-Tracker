import "./ChangeStatus.css";

import { useState } from "react";
import React from 'react'

const ChangeStatus = ({ onConfirm, onCancel }) => {
   
  const [selectedStatus, setSelectedStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedStatus) return;
    onConfirm(selectedStatus);
  };

  return (
    <div className="overlay" >
      <div className="status-container">
          <form action="" onSubmit={handleSubmit}>
            <input type="radio" name="status" id="1option" value="Read"  onChange={(e) => setSelectedStatus(e.target.value)} />
            <label htmlFor="1option">Read</label>
            <input type="radio" name="status" id="2option" value="Currently Reading" onChange={(e) => setSelectedStatus(e.target.value)} />
            <label htmlFor="2option">Currently Reading</label>
            <input type="radio" name="status" id="3option"  value="Want To Read" onChange={(e) => setSelectedStatus(e.target.value)} />
            <label htmlFor="3option">Want To Read</label>
             <br/>
            <div className="change-btn-container">
              <button className="change-btn" type="submit">Confirm</button>
              <button className="change-btn" type="button" onClick={onCancel}>Cancel</button>
              </div>
            </form>
      </div>
    </div>
  )
}

export default ChangeStatus