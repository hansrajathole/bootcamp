import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='flex justify-between p-4 bg-slate-700 text-white'>
      <h1 className='text-2xl font-semibold'>Sheryian</h1>
      <div className='flex gap-7 text-lg'>
        <Link to="/">Home</Link>
        <Link to="/product">Product</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  )
}

export default Navbar