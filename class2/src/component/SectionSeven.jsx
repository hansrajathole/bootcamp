import React from 'react'
import image1 from '../assets/S-7-image.webp'
import circle from '../assets/circle.svg'
import happy from '../assets/happy-face.png'

const SectionSeven = () => {
  return (
    <div className='px-12 bg-white pb-10'>
        <div className='relative flex flex-col justify-center items-center text-center'>
            <p className='font-semibold'>Our belief</p>
            <h1 className='text-9xl font-bold uppercase pt-8'>Brands just want To have fun</h1> 
            <img src={happy} alt="" className=' absolute right-[10%] top-[60%] animate rounded-[50%] w-[150px] h-[150px]' />   
        </div>
        <div className='mt-[4em]'>
            <img src={image1} alt="" className='rounded-[8em]'/>
        </div>
        <div className='flex gap-6 items-center mt-5 opacity-50'>
            <h2 className='text-white bg-black opacity-45 p-2 px-3 rounded-[2em]'>Brand Story sessies</h2>
            <h2 className='font-semibold'>Samen ontdekken we jouw merkverhaal</h2>
        </div>
        <div className='mt-40 w-[100%]'>
            <div className="top w-[100%] border-b-2 border-black">
                <h1 className='text-3xl font-semibold'>Did some cool stuff for</h1>
            </div>
            <div className="middle flex w-[100%] mt-3 uppercase text-xl opacity-40 font-semibold">
                <div className='w-[35%] leading-10'>
                    <h1>Bewakingsdienst van MOOK</h1>
                    <h1>Van der Heijden bouw</h1>
                    <h1>Speyz</h1>
                    <h1>Zeth</h1>
                </div>
                <div className='w-[35%] leading-10'>
                    <h1>Ozo Verbindzorg</h1>
                    <h1>Signal Stream</h1>
                    <h1>Gaaf creaties</h1>
                    <h1>Lunenburg Events</h1>
                </div>
                <div  className='w-[30%] leading-10'>
                    <h1>Twofiftyk</h1>
                    <h1>Adekwaad</h1>
                    <h1>Zoet moment</h1>
                    <h1>Forex library</h1>
                </div>
            </div>
            <div className='flex justify-end'>
                <img src={circle} alt="" className='animate' />
            </div>
        </div>
    </div>
  )
}

export default SectionSeven