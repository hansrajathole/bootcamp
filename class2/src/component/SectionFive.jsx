import React from "react";
import image1 from '../assets/S-5-image-1.jpg'
import image2 from '../assets/S-5-image-2.jpg'

const SectionFive = () => {
  return (
    <div className="mt-6 px-12">
    <div className=" flex gap-5 w-[100%] h-[800px]">
      <div className="left w-[50%] ">
        <div className="top ">
          <div>
            <img src={image2} alt="" className="object-cover w-[100%] rounded-[2em] hover:rounded-[8em] ease-in duration-100"/>
          </div>
          <div >
            <h2 className="font-semibold text-lg opacity-70 text-gray-400">
            Gaaf Creaties
            </h2>
            <h2 className="text-xl font-semibold">Creating mood-boosting experiences</h2>
          </div>
          <div className="flex  gap-6  uppercase text-sm mt-4">
            <h2 className="border-2 border-black px-7 rounded-lg">
              Brand story
            </h2>
            <h2 className="border-2 border-black px-7 rounded-lg">
              Merkidentiteit
            </h2>
            <h2 className="border-2 border-black px-7 rounded-lg">
              Webdesign
            </h2>
          </div>
        </div>
        
      </div>
      <div className="right w-[50%] flex flex-col gap-4 ">
            <img src={image1} alt="" className="object-cover w-full h-[80%] hover:rounded-[8em] ease-in duration-100"  />
            <div className="">
            <h2 className="font-semibold text-lg opacity-70 text-gray-400">
            Don't Mind
            </h2>
            <h2 className="text-xl font-semibold">Campaigners for eventful brands</h2>
          </div>
          <div className="flex  gap-6  uppercase text-sm">
            <h2 className="border-2 border-black px-7 rounded-lg">
              Brand story
            </h2>
            <h2 className="border-2 border-black px-7 rounded-lg">
              Merkidentiteit
            </h2>
            <h2 className="border-2 border-black px-7 rounded-lg">
                Webdesign
            </h2>
          </div>
      </div>
    </div>
    <div className="flex justify-between gap-36 p-5 bg-white rounded-[1em] w-[50%] items-center">
        <h2 className="font-bold">Ook aan de slag met jouw merk?</h2>
        <button className="border-2 font-bold border-black rounded-[1em] p-3">Let's Meet <i class="ri-arrow-right-line ml-4"></i></button>
    </div>
    </div>
  );
};

export default SectionFive;
