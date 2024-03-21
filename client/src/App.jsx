import './App.css'
import Footer from './Components/home_components/Footer'
import Navbar from './Components/home_components/Navbar'
import CruiseCollection from './Pages/CruiseCollection'
import Home from './Pages/Home'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import SignUp from './Pages/SignUp'
import LogIn from './Pages/LogIn'
import Profile from './Components/Profile'
import PrivateRoute from './Components/PrivateRoute'

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cruiseCollection' element={<CruiseCollection/>}/>
          <Route path='/sign-up' element={<SignUp/>}/>
          <Route path='/login' element={<LogIn/>}/>
          <Route element={<PrivateRoute/>}>
              <Route path='/profile' element={<Profile/>}/>
          </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
