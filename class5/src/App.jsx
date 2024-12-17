import React, { useState } from 'react'
import { use } from 'react'

const App = () => {

  const [name, setname] = useState("")
  const [position, setposition] = useState("")
  const [image, setimage] = useState("")
  const [id, setid] = useState("")
  const [alldata, setalldata] = useState([{name : "hansraj",image:"https://i.pinimg.com/736x/bd/d4/b7/bdd4b7ee3423b3f7d1be2d5af154b4ae.jpg", position : "web developer", id : 2345094523}])

  const HandleSubmit = (e)=>{
    e.preventDefault();
    let newdata = {name,position,id,image}
    setalldata([...alldata,newdata])
    setname("")
    setposition("")
    setid("")
    setimage("")

  }
  return (
    <div className=''>
      <form onSubmit={
        HandleSubmit
      } className='p-4 flex flex-col items-center justify-center gap-3'>
        <input 
        value={name}
        onChange={(e)=>setname(e.target.value)}
        type="text" placeholder='enter your name'
        className='p-2 border border-gray-700 rounded-md' />
        <input 
        value={image}
        onChange={(e)=>setimage(e.target.value)}
        type="text" placeholder='enter your image url'
        className='p-2 border border-gray-700 rounded-md' />
  
        <input 
        value={position}
        onChange={(e)=>setposition(e.target.value)}
        type="text" placeholder='enter your position'
        className='p-2 border border-gray-700 rounded-md' />
        <input 
        value={id}
        onChange={(e)=>setid(e.target.value)}
        type="text" placeholder='enter your id'
        className='p-2 border border-gray-700 rounded-md' />
        

        <button className='p-2 bg-blue-500 rounded-md'>Submit</button>
      </form>
      <div className='flex justify-center items-center'>
        {alldata.map((item,index)=>{
          return <div key={index} className='h-[300px] w-[250px] p-2 border-2 border-gray-600 rounded-md'>
            <div className='h-[70%] rounded-md overflow-hidden'>
            <img className='h-full w-full object-cover object-top '  src={item.image} alt="" />
            </div>
            <div className='p-2 text-xl '>
                <h1>{item.name}</h1>
                <h1>{item.position}</h1>
                <h1>{item.id}</h1>
            </div>
          </div>
        })}
      </div>

    </div>
  )
}

export default App