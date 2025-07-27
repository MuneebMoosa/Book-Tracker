import Navigation from '../Components/Navigation/Navigation'
import "./Library.css"

const Library = () => {
  return (
    <div className='library-container'>
      <Navigation/>
      <div className="library-main">
        <h1 className='library-head'>My Library</h1>
      </div>
    </div>
  )
}

export default Library