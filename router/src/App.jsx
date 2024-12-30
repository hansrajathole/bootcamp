import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import Contact  from './pages/Contact'
import Childs from './pages/Childs'
import ChildDetaild from './pages/ChildDetaild'
import Error from './pages/Error'


const App = () => {
  return (
    <div>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/product/:child' element={<Childs/>}/>
        <Route path='/product/:child/childDetaild' element={<ChildDetaild/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/*' element={<Error/>}/>
      </Routes>
    </div>
  )
}

export default App