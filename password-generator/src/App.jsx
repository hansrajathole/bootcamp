import React, { useEffect } from 'react'
import { useCallback } from 'react'
import { useState } from 'react'

const App = () => {

  const [length, setlength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setpassword] = useState("")

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM"
    if(numberAllowed)str += "0123456789"
    if(charAllowed) str += "~!@#$%^&*(){}"

    for(let i = 0 ; i<= length ; i++){
      let char = Math.floor(Math.random()*str.length + 1)
      pass = str.charAt(char)
    }
    setpassword(pass)
  },[length,numberAllowed,charAllowed,password])

  useEffect(() => {
    passwordGenerator()
  
  }, [length,numberAllowed,charAllowed,password])
  




  return (
    <div className='w-full max-w-xl mx-auto shadow-md rounded-lg px-4 text-2xl my-8 text-orange-500 bg-gray-800 text-center p-4'>
      <h1>Password Generator</h1>
      <div className='flex shadow rounded-md overflow-hidden mb-4'>
        <input type="text"
        value={password}
        className='outline-none py-1 px-full w-full p-4'
        placeholder='password'
        readOnly

        />
        <button className='bg-blue-500 text-white px-3 shrink-0'>copy</button>
      </div>
      <div className='flex gap-2'>
        <div>
          <input type="range" 
          min={8}
          max={100}
          value={length}
          onChange={(e)=>{setlength(e.target.value)}}
          />
          <label htmlFor="">
            length : {length}
          </label>
        </div>
        <div className='flex items-center gap-x-1 justify-center text-center'>
          <input
          className=''
          type="checkbox" 
          defaultChecked={numberAllowed}
          onChange={()=>{
            setnumberAllowed((prev)=>!prev)
          }}
          />
          <label htmlFor="">
            numbers
          </label>
        </div>
        <div className='flex items-center gap-x-1 justify-center text-center'>
          <input
          className=''
          type="checkbox" 
          defaultChecked={charAllowed}
          onChange={()=>{
            setcharAllowed((prev)=>!prev)
          }}
          />
          <label htmlFor="">
            Charactor
          </label>
        </div>
      </div>
    </div>
  )
}

export default App