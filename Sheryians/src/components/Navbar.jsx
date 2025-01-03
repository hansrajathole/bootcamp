import React from 'react'
import { Link, Route } from 'react-router-dom'
import logo from '../assets/Sheryians_logo.png';

const Navbar = () => {

  return (
    <div className='flex w-full fixed justify-between items-center text-center  px-14 py-3 backdrop-blur-lg font-semibold text-white'>
        <div className='flex gap-2 items-center'>
            <img src={logo} alt="" className='h-7 w-5 '/>
            <h1>Sheryians coding school</h1>
        </div>
        <div className='flex gap-14 items-center'>
            <Link to="/">Home</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/kodr">Bootcapm(Kodr)</Link>
            <Link to="/request">Request callBack</Link>
            <Link to="/signin" className='bg-[#27DFB3] text-black p-1 px-5 rounded-md'>Sign in</Link>
        </div>
    </div>
  )
}

export default Navbar