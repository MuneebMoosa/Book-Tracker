import Navigation from '../../Components/Navigation/Navigation'
import Card from '../../Components/Cards/Card'
import "./Library.css"

const Library = () => {
  return (
    <div className='library-container'>
      <Navigation/>
      <div className="library-main">
        <h1 className='library-head'>My Library</h1>
        <div className="filter-btn-main">
          <button className='filter-btn'>All</button>
          <button className='filter-btn'>Wishlist</button>
          <button className='filter-btn'>Reading</button>
          <button className='filter-btn'>Completed</button>
        </div>
      </div>

      <div className="card-container">
         <Card  bgColor="#c69dd8"/>
         <Card  bgColor="#c69dd8"/>
         <Card  bgColor="#c69dd8"/>
         <Card  bgColor="#c69dd8"/>
         <Card  bgColor="#B6A4B0"/>
         <Card  bgColor="#B6A4B0"/>
         <Card  bgColor="#B6A4B0"/>
         <Card  bgColor="#B6A4B0"/>
         <Card  bgColor="#F1EEF6"/>
         <Card  bgColor="#F1EEF6"/>
         <Card  bgColor="#F1EEF6"/>
         <Card  bgColor="#F1EEF6"/>
      </div>


    </div>
  )
}

export default Library