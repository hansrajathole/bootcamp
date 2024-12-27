import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useRef } from 'react'

const App = () => {


  const themeRef = useRef(null)
  // localStorage.clear()

  const [mode, setmode] = useState(localStorage.getItem("theme"))
  
  
  function themeHandler(){
    if(mode === "light"){
      localStorage.setItem("theme","dark")
      setmode("dark")
    }else{
      localStorage.setItem("theme","light")
      setmode("light")
    }

  }


  useEffect(() => {
    themeRef.current.setAttribute("id",mode)
  }, [mode])
  

  return (
    <div ref={themeRef} className='h-screen w-full p-2' >
     <div>
     <div className='flex justify-between text-xl font-semibold p-4'>
        <h1>Hansraj</h1>
        <div className='flex gap-3 items-center'>
          <h2>About</h2>
          <h2>services</h2>
          <h2>Contact</h2>
          <h2 onClick={()=>{
            themeHandler()
          }} className='bg-slate-600 p-2 rounded-md text-white cursor-pointer active:scale-90'>Mode</h2>
        </div>
      </div>
     </div>
     <div className='h-full w-full flex justify-center items-center text-4xl font-bold'>
        <h1>Hansraj</h1>
     </div>

    </div>
  )
}

export default App