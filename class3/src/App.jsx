import React, { useState } from 'react'

const App = () => {
  const [use, setuse] = useState(0)

  const increase = ()=>{
    setuse(use+10)
  }

  const dicrease = ()=>{
    setuse(use-10)
  }
  return (
    <div className='flex justify-center flex-col items-center text-center gap-5 h-screen'>
      <button >increase &  Dicrease</button>
      <div className='flex justify-center items-center text-center gap-5 h-screen'>
      <button onClick={increase}>increase </button>
       <h1>{use}</h1>
      <button onClick={dicrease}>Dicrease</button>


      </div>
    </div>
  )
}

export default App