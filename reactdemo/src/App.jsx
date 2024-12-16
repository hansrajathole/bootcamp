import React, { useState } from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import Button from './components/button';

const App = () => {
  const [image, setimage] = useState(false)
  console.log(image);
 
  return (
    <div className='flex justify-center items-center flex-col h-screen w-full'>
      <div className='h-[50%]  w-[34%] bg-slate-400 rounded-md  relative flex overflow-hidden'>
        <img className={`h-full w-full object-cover ease-linear duration-100  ${image === false ? "translate-x-0" : "translate-x-[-100%]"}`} src="https://images.unsplash.com/photo-1706805382051-51631f32cc6c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <img className={`h-full w-full object-cover ease-linear duration-100  ${image === false ? "translate-x-0" : "translate-x-[-100%]"}`} src="https://images.unsplash.com/photo-1713730553386-4a94c0eb1cf6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        <span onClick={()=>{setimage(()=>!image)}} className='h-10 w-10 rounded-full absolute bottom-9 left-[50%] translate-x-[-50%] bg-[#dadada7d] flex justify-center items-center p-2 cursor-pointer'>
          <FaArrowRightLong size={"5em"}/>
        </span>
      </div>
      <div className='w-[34%] flex gap-2 m-4'>
        <Button chacha={"Download"} color={"bg-blue-400"}/>
        <Button chacha={"Know More"} color={"bg-red-400"}/>
      </div>
    </div>
  )
}

export default App