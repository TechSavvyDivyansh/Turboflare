import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import UserData from './pages/CustomerData'
import Listing from './pages/Listing'

function App() {

  return (
    <BrowserRouter>
      <div className="flex">
        <Navbar/>
        <Routes>
          <Route path='/customer-data' element={<UserData/>}/>
          <Route path='/listing' element={<Listing/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
