import { FaBook } from "react-icons/fa";
import './Navigation.css'
const Navigation = () => {
  return (
    <div>
      <nav className='nav-bar'>
        <h1 className='nav-main-head'><span><FaBook /></span>Book Tracker</h1>
        <div className="nav-btns">
            <button className='index-btn'>Home</button>
            <button className='index-btn'>Add Book</button>
            <button className='index-btn'>My Library</button>
            <button className='index-btn'>Settings</button>
        </div>
      </nav>
    </div>
  )
}

export default Navigation
   