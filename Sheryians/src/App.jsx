import React from 'react'
import { Route, Routes } from 'react-router-dom'  
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Kodr from './pages/Kodr'
import Request from './pages/Request'
import SignIn from './pages/SignIn'
import Courses from './pages/Courses'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/courses" element={<Courses/>}/>
        <Route path="/kodr" element={<Kodr/>}/>
        <Route path="/request" element={<Request/>}/>
        <Route path="/signin" element={<SignIn/>}/>
      </Routes>
    </div>
  )
}

export default App