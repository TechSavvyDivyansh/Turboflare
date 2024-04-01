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
import TeamData from './pages/TeamData.jsx'
import Profile from './pages/Profile.jsx'
import ViewListing from './Components/Listing/ViewListing.jsx'

function App() {
  let {currentAdmin}=useSelector(state=>state.admin)
  return (
    <BrowserRouter>
      <div className="flex">
            {currentAdmin && <Navbar/>}
            <Routes>        
              {!currentAdmin && <Route path='/' element={<AdminLogin/>} /> }
              <Route element={<PrivateRoute/>}>
                        <Route path='/customer-data' element={<CustomerData/>}/>
                        <Route path='/listing/create-listing' element={<Listing/>}/>
                        <Route path='/listing/view' element={<ViewListing/>}/>
                        <Route path='/advertisement' element={<Advertisment/>}/>
                        <Route path='/profile' element={<Profile/>} />
                        {currentAdmin && currentAdmin.isAdmin && <Route path='/team-data' element={<TeamData/>}/>}

              </Route>

            </Routes>
      </div>
      
    </BrowserRouter>
  )
}

export default App
