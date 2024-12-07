import React from 'react'
import logo from "../assets/logo.svg"

const SectionOne = () => {
  return (
    <div className='h-full w-full flex'>
        <div className=' w-[70%] text-black font-normal text-9xl playfair px-14 leading-[85%] tracking-tight'>
            <h1>Turning heads</h1>
            <h1> and conquering</h1>

            <div className='flex text-center items-center gap-8 '>
            <h1>hearts </h1>
            <img src={logo} alt="" className=' rotate-45 w-16 h-16 mt-8 animate' />
            </div>
        </div>
        <div className=' w-[30%] flex flex-col justify-end items-end gap-11 pr-20'>
            <p className=' h-[15%] w-[70%]'>NiceAtNoon is een boutique design studio gespecialiseerd in branding en webdesign.</p>
            <div className='pr-28 '><button className='p-3  bg-white border-black rounded-2xl font-semibold '>Bekijk Projecten <i class="ri-arrow-right-line"></i></button></div>
        </div>
    </div>
  )
}

export default SectionOne