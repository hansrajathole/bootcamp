import React from 'react'
import footer from '../assets/footer-logo.png'

const Footer = () => {
  return (
    <div className=' pt-20 bg-black w-[100%]'>
        <div className="px-12 top w-[100%]] text-white flex justify-between">
            <div className="left w-[70%]">
                <h1 className='text-5xl font-semibold'>Let's turn some heads!</h1>
                <button className='p-3 mt-7 border-2 rounded-[1em] hover:rounded-[2em] ease-linear duration-300'>Contact <i class="ri-arrow-right-line ml-7"></i></button>
            </div>
            <div className="right w-[30%] flex justify-between">
                <div>
                    <h1 className='text-xl pb-7 font-semibold'>Socials</h1>
                   <div className='flex flex-col text-xs gap-3 font-medium uppercase'>
                    <h1>Instagram</h1>
                    <h2>Linkedin</h2>
                    <h2>Tweeter</h2>
                   </div>
                </div>
                <div>
                    <h1 className='text-xl pb-7 font-semibold' >Sitemap</h1>
                    <div className='flex flex-col text-xs gap-3 font-medium uppercase'>
                    <h2>Home</h2>
                    <h2>Projecten</h2>
                    <h2>Over</h2>
                    <h2>Contact</h2>
                    </div>

                </div>
                <div>
                    <h1 className='text-xl pb-7 font-semibold'>Info</h1>
                    <div className='flex flex-col text-xs gap-3 font-medium uppercase'>
                    <h2>Algemene voorwaarden</h2>
                    <h2>Privacybeleid</h2>
                    <h2>Cookiebeleid</h2>
                    </div>
                </div>
            </div>
        </div>
        <div className="mt-28 bottom">
            <img src={footer} alt="" />
        </div>
    </div>
  )
}

export default Footer