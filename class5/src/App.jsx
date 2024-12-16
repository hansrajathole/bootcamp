import React, { useState } from 'react'

const App = () => {

  const [name, setname] = useState("")
  const [lastName, setlastName] = useState("")

  const [alldata, setalldata] = useState([])

  const HandleSubmit = (e)=>{
    e.preventDefault();
    console.log(name);
    setname('')
    
  }
  return (
    <div>
      <form onSubmit={
        HandleSubmit
      } className='p-4 flex gap-3'>
        <input 
        value={name}
        onChange={(e)=>setname(e.target.value)}
        type="text" placeholder='enter your name'
        className='p-2 border border-gray-700 rounded-md' />
        <button className='p-2 bg-blue-500 rounded-md'>Submit</button>
      </form>
    </div>
  )
}

export default App