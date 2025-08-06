import { FaBook } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import './Navigation.css'
const Navigation = () => {
  return (
    <div>
      <nav className='nav-bar'>
        <h1 className='nav-main-head'><span><FaBook /></span>Book Tracker</h1>
        <div className="nav-btns">
         <NavLink to="/" className="index-btn"> Home</NavLink>
         <NavLink to="/" className="index-btn"> Add Book</NavLink>
         <NavLink to="/library" className="index-btn"> My Library</NavLink>
         <NavLink to="/settings" className="index-btn"> Settings</NavLink>
        </div>
      </nav>
    </div>
  )
}

export default Navigation
   