import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className=' h-screen 
     flex flex-col justify-center items-center text-center'>
      <div className='w-[60%] h-[50%] text-8xl font-light'>
        <h1>We only <span className='text-[#24CFA6]' >tech</span></h1>
        <h1>what we are really</h1>
        <h1>really <span className='italic'>good</span> at.</h1>
        <Link className='text-xl bg-[#27DFB3] px-9 py-2 rounded-md text-black font-semibold' to="/courses">Check Courses-make an impact</Link>
      </div>
    
    </div>
  )
}

export default Home