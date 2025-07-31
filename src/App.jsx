import React from 'react'
import "./index.css";
import Home from './Pages/HomePage/Home';
import Library from './Pages/LibraryPage/Library';
import Detail from './Pages/DetailsPage/Detail';
const App = () => {
  return (
    <div>
      <Home/>
      <Library/>
      <Detail/>
    </div>
  )
}

export default App