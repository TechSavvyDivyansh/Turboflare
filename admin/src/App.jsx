import React from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Listing from './pages/Listing'
import CustomerData from './pages/CustomerData'
import Advertisment from './pages/Advertisment'
import AdminLogin from './pages/AdminLogin'
import PrivateRoute from './Components/PrivateRoute.jsx'
import {useSelector} from 'react-redux'

function App() {
  let {currentAdmin}=useSelector(state=>state.admin)
  return (
    <BrowserRouter>
      <div className="flex">
            {currentAdmin && <Navbar/>}
            <Routes>        
              <Route path='/' element={<AdminLogin/>} />
              <Route element={<PrivateRoute/>}>
                        <Route path='/customer-data' element={<CustomerData/>}/>
                        <Route path='/listing' element={<Listing/>}/>
                        <Route path='/advertisement' element={<Advertisment/>}/>
                        {/* <Route path='/sign-up' element={<AdminSignup/>} /> */}
              </Route>

            </Routes>
      </div>
      
    </BrowserRouter>
  )
}

export default App
