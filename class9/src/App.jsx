import React from 'react'
import { useState } from 'react'

const App = () => {


  // const themeRef = useRef(null)
  // localStorage.setItem("theme","light")
  localStorage.clear()

  const [mode, setmode] = useState(localStorage.getItem("theme")=="light"?"light":localStorage.setItem("theme","light"))

  return (
    <div className='h-screen w-full p-2' >
     <div>
     <div className='flex justify-between text-xl font-semibold p-4'>
        <h1>Hansraj</h1>
        <div className='flex gap-3 items-center'>
          <h2>About</h2>
          <h2>services</h2>
          <h2>Contact</h2>
          <h2 className='bg-slate-600 p-2 rounded-md text-white cursor-pointer active:scale-90'>Mode</h2>
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