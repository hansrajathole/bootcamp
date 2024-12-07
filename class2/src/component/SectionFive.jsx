import React from "react";
import image1 from '../assets/S-5-image-1.jpg'
import image2 from '../assets/S-5-image-2.jpg'
import Down from '../assets/DowntoEarth.jpg'
import hover from '../assets/hover.jpg'

const SectionFive = () => {
  return (
    <div className="mt-6 px-12 pb-20">
    <div className=" flex gap-5 w-[100%] h-[800px]">
      <div className="left w-[50%] ">
        <div className="top ">
          <div className="group relative w-[100%]">
            <img src={image2} alt="" className="group-hover:scale-[1.06] relative group object-cover w-[96%] rounded-[2em]  group-hover:rounded-[4em] ease-linear duration-200"/>
            <img src={Down} alt="" className="group group-hover:opacity-100  ease-linear duration-200 absolute h-[300px] w-[400px] top-[13%] left-[20%] opacity-0 rounded-[40px]"/>
          </div>
          <div >
            <h2 className="font-semibold text-lg opacity-70 text-gray-400">
            Gaaf Creaties
            </h2>
            <h2 className="text-xl font-semibold">Creating mood-boosting experiences</h2>
          </div>
          <div className="flex  gap-6  uppercase text-sm mt-4">
            <h2 className="border-[1px] border-black px-3 rounded-lg">
              Brand story
            </h2>
            <h2 className="border-[1px] border-black px-3 rounded-lg">
              Merkidentiteit
            </h2>
            <h2 className="border-[1px] border-black px-3 rounded-lg">
              Webdesign
            </h2>
          </div>
        </div>
        
      </div>
      <div className="relative group right w-[50%] flex flex-col gap-4 ">
            <img src={image1} alt="" className="group group-hover:scale-[1.06] object-cover w-full h-[80%] group-hover:rounded-[5em] ease-linear duration-200"  />
            <img src={hover} alt="" className="group group-hover:opacity-100 ease-linear duration-200 absolute top-[15%] left-[30%] w-[350px] h-[400px] rounded-[4em] opacity-0" />
            <div className="">
            <h2 className="font-semibold text-lg opacity-70 text-gray-400">
            Don't Mind
            </h2>
            <h2 className="text-xl font-semibold">Campaigners for eventful brands</h2>
          </div>
          <div className="flex  gap-6  uppercase text-sm">
            <h2 className="border-[1px] border-black px-3 rounded-lg">
              Brand story
            </h2>
            <h2 className="border-[1px] border-black px-3 rounded-lg">
              Merkidentiteit
            </h2>
            <h2 className="border-[1px] border-black px-3 rounded-lg">
                Webdesign
            </h2>
          </div>
      </div>
    </div>
    <div className="flex justify-between gap-36 p-5 bg-white rounded-[1em] w-[50%] items-center">
        <h2 className="font-bold">Ook aan de slag met jouw merk?</h2>
        <button className="border-[1px] font-bold border-black rounded-[1em] p-3 hover:rounded-[2em] ease-linear duration-300">Let's Meet <i class="ri-arrow-right-line ml-4"></i></button>
    </div>
    </div>
  );
};

export default SectionFive;
