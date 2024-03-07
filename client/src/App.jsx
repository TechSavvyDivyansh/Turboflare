import './App.css'
import Footer from './Components/home_components/Footer'
import Navbar from './Components/home_components/Navbar'
import CruiseCollection from './Pages/CruiseCollection'
import Home from './Pages/Home'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import SignUp from './Pages/SignUp'
import LogIn from './Pages/LogIn'

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cruiseCollection' element={<CruiseCollection/>}/>
          <Route path='/sign-up' element={<SignUp/>}/>
          <Route path='/login' element={<LogIn/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
