import React, { useState } from 'react'
import { use } from 'react'
import Contact from './Contact'

const Home = () => {
  const [name, setName] = useState("")
  const [company, setCompany] = useState("")
  const [Phone, setPhone] = useState("")
  const [allData, setallData] = useState([])


  const submitHaandler = (e)=>{
    e.preventDefault()
    const newData = {name,company,Phone}
    setallData([...allData , newData])
    
    setName("")
    setCompany("")
    setPhone("")
    console.log(allData);
  }
  return (
    <div>
    <div className=' h-screen w-full flex justify-center items-center bg-white'>

        <form 
        onSubmit={submitHaandler}
        className='w-[40%] border-2 rounded-lg backdrop:blur-3xl shadow-md shadow-black p-5 flex flex-col gap-5'>
          <h1 className='font-semibold text-2xl'>Add Contact</h1>
          <div className="name w-full flex flex-col ">
          <div> <label className='w-[20%] text-lg font-semibold mr-1' >Name</label><span className='text-red-700'>*</span></div>
            <input
            value={name}
            onChange={(e)=>{setName(e.target.value)}}
            className='w-full p-2 rounded-lg bg-slate-200 text-black ' placeholder='Enter your name' type="text" />
          </div>
         
          <div className="name w-full flex flex-col ">
          <label className='w-[20%] text-lg font-semibold mr-4' >Company</label>
            <input 
            value={company}
            onChange={(e)=>{setCompany(e.target.value)}}
            className='w-full p-2 rounded-lg bg-slate-200 text-black ' placeholder='Enter your company' type="text" />
          </div>
         
          <div className="name w-full flex flex-col "> 
            <div> <label className='w-[20%] text-lg font-semibold mr-1' >Phone</label><span className='text-red-700'>*</span></div>
            <input 
            value={Phone}
            onChange={(e)=>{setPhone(e.target.value)
            }}
            className='w-full p-2 rounded-lg  bg-slate-200 text-black' placeholder='Enter your Phone number' type="text" />
          </div>
         
         <button className='font-semibold bg-blue-700 text-xl p-2 rounded-lg'>Add Contact </button>

        </form>
     
    </div>
  </div>
  )
}

export default Home