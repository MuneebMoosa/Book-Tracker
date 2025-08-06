import React from 'react'
import "./index.css";
import { Outlet } from 'react-router-dom';
const App = () => {
  return (
    <div>
     {/* nothing because its rendering through routes */}
     <Outlet/>
    </div>
  )
}

export default App