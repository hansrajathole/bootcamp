import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between  p-4 bg-slate-900  text-white'>
        <Link to="/" className='text-2xl font-semibold ml-7'>Sheryians</Link>
       
        <div className='flex gap-10 text-lg hover:'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/product">Product</Link>
        </div>
    </div>
  )
}

export default Navbar