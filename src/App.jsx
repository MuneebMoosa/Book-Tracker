import React from 'react'
import "./index.css";
import Home from './Pages/HomePage/Home';
import Library from './Pages/LibraryPage/Library';
import Detail from './Pages/DetailsPage/Detail';
import ChangeStatus from './Components/ChangeStatus/ChangeStatus';
const App = () => {
  return (
    <div>
      {/* <Home/> */}
      <Library/>
      {/* <Detail/> */}
      {/* <ChangeStatus/> */}
    </div>
  )
}

export default App